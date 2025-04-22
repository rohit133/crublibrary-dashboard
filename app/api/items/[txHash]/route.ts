import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { NextRequest } from "next/server";
import { validateKeyAndDecrementCredits } from "@/lib/api-utils";
import { corsHeaders } from "@/lib/cors-header";

/**
 * @description API route handler for fetching a specific item by its txHash.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ txHash: string }> }
): Promise<NextResponse> {
  const apiKey =
    request.headers.get("Authorization")?.split("Bearer ")[1] ||
    request.headers.get("X-API-Key");
  const { txHash } = await params;

  if (!apiKey) {
    return NextResponse.json({ message: "API Key missing" }, { status: 401, headers: corsHeaders });
  }

  if (!txHash || typeof txHash !== "string") {
    return NextResponse.json({ message: "Invalid txHash format" }, { status: 400, headers: corsHeaders });
  }

  try {
    const validationResult = await validateKeyAndDecrementCredits(apiKey);
    if (validationResult.error) {
      return NextResponse.json(
        { message: validationResult.error.message },
        { status: validationResult.error.status, headers: corsHeaders }
      );
    }
    const user = validationResult.user;
    if (!user) {
      return NextResponse.json(
        { message: "Validation failed unexpectedly" },
        { status: 500, headers: corsHeaders }
      );
    }

    const item = await prisma.item.findFirst({
      where: {
        txHash,
        userId: user.id,
      },
      select: { value: true, txHash: true },
    });

    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404, headers: corsHeaders });
    }

    return NextResponse.json(item, { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error(`GET /api/items/${txHash} Error:`, error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500, headers: corsHeaders }
    );
  }
}

/**
 * @description API route handler for updating a specific item by its txHash.
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ txHash: string }> }
): Promise<NextResponse> {
  const apiKey =
    request.headers.get("Authorization")?.split("Bearer ")[1] ||
    request.headers.get("X-API-Key");
    const { txHash } = await params;

  if (!apiKey) {
    return NextResponse.json({ message: "API Key missing" }, { status: 401, headers: corsHeaders });
  }

  if (!txHash || typeof txHash !== "string") {
    return NextResponse.json({ message: "Invalid txHash format" }, { status: 400, headers: corsHeaders });
  }

  try {
    const validationResult = await validateKeyAndDecrementCredits(apiKey);
    if (validationResult.error) {
      return NextResponse.json(
        { message: validationResult.error.message },
        { status: validationResult.error.status, headers: corsHeaders }
      );
    }
    const user = validationResult.user;
    if (!user) {
      return NextResponse.json(
        { message: "Validation failed unexpectedly" },
        { status: 500, headers: corsHeaders }
      );
    }

    const body = await request.json();
    const { value, txHash: newTxHash } = body;

    if (value === undefined && newTxHash === undefined) {
      return NextResponse.json(
        { message: "No update data provided" },
        { status: 400, headers: corsHeaders }
      );
    }
    if (value !== undefined && typeof value !== "number") {
      return NextResponse.json(
        { message: "Invalid input: value must be a number" },
        { status: 400, headers: corsHeaders }
      );
    }
    if (newTxHash !== undefined && typeof newTxHash !== "string") {
      return NextResponse.json(
        { message: "Invalid input: txHash must be a string" },
        { status: 400, headers: corsHeaders }
      );
    }

    const updateData: { value?: number; txHash?: string } = {};
    if (value !== undefined) updateData.value = value;
    if (newTxHash !== undefined) updateData.txHash = newTxHash;

    const updateResult = await prisma.item.updateMany({
      where: { txHash, userId: user.id },
      data: updateData,
    });

    if (updateResult.count === 0) {
      return NextResponse.json(
        { message: "Item not found or not owned by user" },
        { status: 404, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { status: "updated successfully" },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error(`PUT /api/items/${txHash} Error:`, error);
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: "Invalid JSON body" },
        { status: 400, headers: corsHeaders }
      );
    }
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500, headers: corsHeaders }
    );
  }
}

/**
 * @description API route handler for deleting a specific item by its txHash.
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ txHash: string }> }
): Promise<NextResponse> {
  const apiKey =
    request.headers.get("Authorization")?.split("Bearer ")[1] ||
    request.headers.get("X-API-Key");
  const { txHash } = await params;

  if (!apiKey) {
    return NextResponse.json({ message: "API Key missing" }, { status: 401, headers: corsHeaders });
  }

  if (!txHash || typeof txHash !== "string") {
    return NextResponse.json({ message: "Invalid txHash format" }, { status: 400, headers: corsHeaders });
  }

  try {
    const validationResult = await validateKeyAndDecrementCredits(apiKey);
    if (validationResult.error) {
      return NextResponse.json(
        { message: validationResult.error.message },
        { status: validationResult.error.status, headers: corsHeaders }
      );
    }
    const user = validationResult.user;
    if (!user) {
      return NextResponse.json(
        { message: "Validation failed unexpectedly" },
        { status: 500, headers: corsHeaders }
      );
    }

    const deleteResult = await prisma.item.deleteMany({
      where: { txHash, userId: user.id },
    });

    if (deleteResult.count === 0) {
      return NextResponse.json(
        { message: "Item not found or not owned by user" },
        { status: 404, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { status: "deleted successfully" },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error(`DELETE /api/items/${txHash} Error:`, error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500, headers: corsHeaders }
    );
  }
}

// Handle CORS preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}
