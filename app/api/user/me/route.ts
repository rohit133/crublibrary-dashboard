import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { NextRequest } from "next/server";
import { corsHeaders } from "@/lib/cors-header";


/**
 * @description API route handler for fetching the current user's details.
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  const userId = request.headers.get('X-User-ID');
  if (!userId) {
    return NextResponse.json({ message: 'User ID missing in headers' }, { status: 401, headers: corsHeaders });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        apiKey: true,
        credits: true,
        creditsUsed: true,
        recharged: true,
      }
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404, headers: corsHeaders });
    }
    
    const userClientData = {
      id: user.id,
      email: user.email,
      name: user.name,
      image: user.image,
      apiKey: user.apiKey,
      creditsRemaining: user.credits,
      creditsUsed: user.creditsUsed,
      canRecharge: !user.recharged,
    };

    return NextResponse.json({ success: true, data: userClientData }, { status: 200, headers: corsHeaders });

  } catch (error) {
    console.error("GET /api/user/me Error:", error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500, headers: corsHeaders });
  }
}

// Handle CORS preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}