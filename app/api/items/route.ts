import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { NextRequest } from "next/server";
import { validateKeyAndDecrementCredits } from "@/lib/api-utils";

/**
 * @description API route handler for creating new items.
 * Authenticates the request using an API key, validates it, and decrements credits.
 * Creates a new item in the database with the provided value and transaction hash.
 * @param {NextRequest} request - The incoming Next.js request object. Must contain 'Authorization' or 'X-API-Key' header and a JSON body with 'value' (number) and 'txHash' (string).
 * @returns {Promise<NextResponse>} A promise that resolves to a Next.js response object.
 * Returns 201 with the new item's ID on success.
 * Returns 401 if the API key is missing.
 * Returns 400 if the input body is invalid or malformed JSON.
 * Returns 402 or 403 if API key validation fails (invalid key, insufficient credits).
 * Returns 500 for internal server errors.
 */

export async function POST(request: NextRequest): Promise<NextResponse> {
  const apiKey = request.headers.get('Authorization')?.split('Bearer ')[1] || request.headers.get('X-API-Key');

  if (!apiKey) {
    return NextResponse.json({ message: 'API Key missing' }, { status: 401 });
  }

  try {
    const validationResult = await validateKeyAndDecrementCredits(apiKey);
    if (validationResult.error) {
      return NextResponse.json({ message: validationResult.error.message }, { status: validationResult.error.status });
    }
    const user = validationResult.user; 
    if (!user) { 
        return NextResponse.json({ message: 'Validation failed unexpectedly' }, { status: 500 });
    }
    
    const body = await request.json();
    const { value, txHash } = body;

    if (typeof value !== 'number' || typeof txHash !== 'string') {
      return NextResponse.json({ message: 'Invalid input: value must be a number, txHash must be a string' }, { status: 400 });
    }

    const newItem = await prisma.item.create({
      data: {
        value: value,
        txHash: txHash,
        userId: user.id, 
      },
      select: { id: true } 
    });

    return NextResponse.json({ id: newItem.id, status: "created successfully" }, { status: 201 });

  } catch (error) {
    console.error("POST /api/items Error:", error);
    if (error instanceof SyntaxError) {
        return NextResponse.json({ message: 'Invalid JSON body' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// You might add GET /api/items later if needed for the Todo app
// export async function GET(request: Request) {
//   return NextResponse.json({ message: "GET /api/items - Not implemented yet" }, { status: 501 });
// } 