import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { generateApiKey } from '@/lib/api-key-utils';

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();
    const { googleId, email, name, picture } = requestBody;

    if (!googleId || !email) {
      return NextResponse.json(
        { success: false, message: 'Required user information missing' },
        { status: 400 }
      );
    }

    let user;
    try {
      user = await prisma.user.findUnique({
        where: { googleId }
      });
    } catch (dbError) {
      return NextResponse.json(
        { success: false, message: 'Database error during user lookup' },
        { status: 500 }
      );
    }

    if (!user) {
      const newApiKey = generateApiKey();
      const newUserInput = {
        googleId: googleId,
        email: email,
        name: name || null,
        image: picture || null,
        apiKey: newApiKey,
        apiUrl: "https://api.crudlibrary.com/v1",
      };

      try {
        user = await prisma.user.create({ data: newUserInput });
      } catch (dbError) {
        return NextResponse.json(
          { success: false, message: 'Database error during user creation' },
          { status: 500 }
        );
      }
    } else {
      if (user.name !== (name || null) || user.image !== (picture || null)) {
        const updateData = {
          name: name || null,
          image: picture || null,
        };
        try {
          user = await prisma.user.update({ where: { id: user.id }, data: updateData });
        } catch (dbError) {
          return NextResponse.json(
            { success: false, message: 'Database error during user update' },
            { status: 500 }
          );
        }
      }
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

    console.log("DEBUG: Sending user data to frontend:", userClientData);

    return NextResponse.json({
      success: true,
      data: userClientData,
      message: 'Authentication successful'
    });

  } catch (error) {
    console.error('Google authentication error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error during authentication';
    return NextResponse.json(
      {
        success: false,
        message: 'Authentication failed',
        error: process.env.NODE_ENV === 'development' ? errorMessage : 'Internal Server Error'
      },
      { status: 500 }
    );
  }
}
