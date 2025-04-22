import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { NextRequest } from "next/server";
import { validateKeyAndDecrementCredits } from "@/lib/api-utils";

/**
 * @description API route handler for fetching a specific item by its ID.
 * Authenticates the request, validates the API key, decrements credits, and retrieves the item if it belongs to the user.
 * @param {NextRequest} request - The incoming Next.js request object. Must contain 'Authorization' or 'X-API-Key' header.
 * @param {{ params: { id: string } }} params - The route parameters, containing the item ID.
 * @returns {Promise<NextResponse>} A promise that resolves to a Next.js response object.
 * Returns 200 with the item data ({ value, txHash }) on success.
 * Returns 401 if the API key is missing.
 * Returns 400 if the item ID format is invalid.
 * Returns 402 or 403 if API key validation fails.
 * Returns 404 if the item is not found or does not belong to the user.
 * Returns 500 for internal server errors or unexpected validation failures.
 */
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const apiKey = request.headers.get('Authorization')?.split('Bearer ')[1] || request.headers.get('X-API-Key');
  const id = params.id;

  if (!apiKey) {
    return NextResponse.json({ message: 'API Key missing' }, { status: 401 });
  }

  if (!id || isNaN(parseInt(id))) {
     return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
  }
  const itemId = parseInt(id);

  try {
    // Call enhanced validation function first
    const validationResult = await validateKeyAndDecrementCredits(apiKey);
    if (validationResult.error) {
      return NextResponse.json({ message: validationResult.error.message }, { status: validationResult.error.status });
    }
    const user = validationResult.user;
     if (!user) { 
        return NextResponse.json({ message: 'Validation failed unexpectedly' }, { status: 500 });
    }

    // Proceed with getting the item
    const item = await prisma.item.findUnique({
      where: {
        id: itemId,
        userId: user.id // Ensure the item belongs to the validated user
      },
      select: { value: true, txHash: true }
    });

    if (!item) {
      // Credits were already decremented. Rollback?
      return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(item, { status: 200 });

  } catch (error) {
    console.error(`GET /api/items/${id} Error:`, error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

/**
 * @description API route handler for updating a specific item by its ID.
 * Authenticates the request, validates the API key, decrements credits, and updates the item if it belongs to the user.
 * @param {NextRequest} request - The incoming Next.js request object. Must contain 'Authorization' or 'X-API-Key' header and a JSON body with optional 'value' (number) and/or 'txHash' (string).
 * @param {{ params: { id: string } }} params - The route parameters, containing the item ID.
 * @returns {Promise<NextResponse>} A promise that resolves to a Next.js response object.
 * Returns 200 with { status: "updated successfully" } on success.
 * Returns 401 if the API key is missing.
 * Returns 400 if the item ID format is invalid, the input body is invalid/malformed JSON, or no update data is provided.
 * Returns 402 or 403 if API key validation fails.
 * Returns 404 if the item is not found or does not belong to the user.
 * Returns 500 for internal server errors or unexpected validation failures.
 */
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const apiKey = request.headers.get('Authorization')?.split('Bearer ')[1] || request.headers.get('X-API-Key');
  const id = params.id;

  if (!apiKey) {
    return NextResponse.json({ message: 'API Key missing' }, { status: 401 });
  }

  if (!id || isNaN(parseInt(id))) {
    return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
  }
  const itemId = parseInt(id);

  try {
     // Call enhanced validation function first
    const validationResult = await validateKeyAndDecrementCredits(apiKey);
    if (validationResult.error) {
      return NextResponse.json({ message: validationResult.error.message }, { status: validationResult.error.status });
    }
    const user = validationResult.user;
     if (!user) { 
        return NextResponse.json({ message: 'Validation failed unexpectedly' }, { status: 500 });
    }

    // Proceed with update
    const body = await request.json();
    const { value, txHash } = body;

    if (value === undefined && txHash === undefined) {
       return NextResponse.json({ message: 'No update data provided' }, { status: 400 });
    }
    if (value !== undefined && typeof value !== 'number') {
       return NextResponse.json({ message: 'Invalid input: value must be a number' }, { status: 400 });
    }
     if (txHash !== undefined && typeof txHash !== 'string') {
       return NextResponse.json({ message: 'Invalid input: txHash must be a string' }, { status: 400 });
    }

    const updateData: { value?: number; txHash?: string } = {};
    if (value !== undefined) updateData.value = value;
    if (txHash !== undefined) updateData.txHash = txHash;

    const updateResult = await prisma.item.updateMany({
      where: { id: itemId, userId: user.id },
      data: updateData,
    });

    if (updateResult.count === 0) {
       // Credits were already decremented. Rollback?
      return NextResponse.json({ message: 'Item not found or not owned by user' }, { status: 404 });
    }

    return NextResponse.json({ status: "updated successfully" }, { status: 200 });

  } catch (error) {
    console.error(`PUT /api/items/${id} Error:`, error);
     if (error instanceof SyntaxError) {
        return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

/**
 * @description API route handler for deleting a specific item by its ID.
 * Authenticates the request, validates the API key, decrements credits, and deletes the item if it belongs to the user.
 * @param {NextRequest} request - The incoming Next.js request object. Must contain 'Authorization' or 'X-API-Key' header.
 * @param {{ params: { id: string } }} params - The route parameters, containing the item ID.
 * @returns {Promise<NextResponse>} A promise that resolves to a Next.js response object.
 * Returns 200 with { status: "deleted successfully" } on success.
 * Returns 401 if the API key is missing.
 * Returns 400 if the item ID format is invalid.
 * Returns 402 or 403 if API key validation fails.
 * Returns 404 if the item is not found or does not belong to the user.
 * Returns 500 for internal server errors or unexpected validation failures.
 */
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const apiKey = request.headers.get('Authorization')?.split('Bearer ')[1] || request.headers.get('X-API-Key');
  const id = params.id;

  if (!apiKey) {
    return NextResponse.json({ message: 'API Key missing' }, { status: 401 });
  }

  if (!id || isNaN(parseInt(id))) {
    return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
  }
  const itemId = parseInt(id);

  try {
     // Call enhanced validation function first
    const validationResult = await validateKeyAndDecrementCredits(apiKey);
    if (validationResult.error) {
      return NextResponse.json({ message: validationResult.error.message }, { status: validationResult.error.status });
    }
    const user = validationResult.user;
     if (!user) { 
        return NextResponse.json({ message: 'Validation failed unexpectedly' }, { status: 500 });
    }

    // Proceed with delete
    const deleteResult = await prisma.item.deleteMany({
      where: { id: itemId, userId: user.id },
    });

    if (deleteResult.count === 0) {
       // Credits were already decremented. Rollback?
      return NextResponse.json({ message: 'Item not found or not owned by user' }, { status: 404 });
    }

    return NextResponse.json({ status: "deleted successfully" }, { status: 200 });

  } catch (error) {
    console.error(`DELETE /api/items/${id} Error:`, error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
} 