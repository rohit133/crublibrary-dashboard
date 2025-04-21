import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const userId = request.headers.get('X-User-ID');
  if (!userId) {
    return NextResponse.json({ message: 'User ID missing in headers' }, { status: 401 });
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
        apiUrl: true,
        credits: true,
        creditsUsed: true,
        recharged: true,
        // Excluding sensitive fields if any
      }
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    
    const userClientData = {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
        apiKey: user.apiKey,
        apiUrl: user.apiUrl,
        creditsRemaining: user.credits,
        creditsUsed: user.creditsUsed,
        canRecharge: !user.recharged,
      };

    return NextResponse.json({ success: true, data: userClientData }, { status: 200 });

  } catch (error) {
    console.error("GET /api/user/me Error:", error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
} 