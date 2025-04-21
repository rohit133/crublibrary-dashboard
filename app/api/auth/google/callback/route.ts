import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { OAuth2Client } from 'google-auth-library';
import { generateApiKey } from '@/lib/api-key-utils';

const client = new OAuth2Client(process.env.NEXT_GOOGLE_CLIENT_ID);

export async function POST(request: Request) {
    console.log("INFO: Received request in /api/auth/google/callback");
    try {
      const { credential } = await request.json();
      console.log("INFO: Extracted credential from request body.");

      if (!credential) {
        console.error("ERROR: Credential token missing in request body.");
        return NextResponse.json(
          { success: false, message: 'Credential token missing' },
          { status: 400 }
        );
      }
      console.log("INFO: Credential present, proceeding to verify ID token.");

      let ticket;
      try {
        ticket = await client.verifyIdToken({
          idToken: credential,
          audience: process.env.NEXT_GOOGLE_CLIENT_ID,
        });
        console.log("INFO: Google ID token verified successfully.");
      } catch (verificationError) {
        console.error("ERROR: Google ID token verification failed:", verificationError);
        return NextResponse.json(
            { success: false, message: 'Google token verification failed' },
            { status: 401 }
          ); 
      }
      
      const payload = ticket.getPayload();
      if (!payload) {
        console.error("ERROR: Invalid Google token payload after verification.");
        return NextResponse.json(
          { success: false, message: 'Invalid Google token payload' },
          { status: 401 }
        );
      }
      console.log("INFO: Google token payload obtained:", { email: payload.email, googleId: payload.sub });
  
      const { sub: googleId, email, name, picture: image } = payload;
      
      if (!googleId || !email) {
        console.error("ERROR: Missing required Google user information (ID or Email) in payload:", payload);
        return NextResponse.json(
          { success: false, message: 'Missing required Google user information (ID or Email)' },
          { status: 400 }
        );
      }
      console.log(`INFO: Attempting to find user with googleId: ${googleId}`);
  
      let user;
      try {
        user = await prisma.user.findUnique({ where: { googleId: googleId } });
        if (user) {
            console.log(`INFO: Found existing user with email: ${user.email}`);
        } else {
            console.log(`INFO: No existing user found for googleId: ${googleId}. Will attempt to create.`);
        }
      } catch (dbError) {
          console.error("ERROR: Database error during findUnique:", dbError);
          throw dbError; 
      }
      
      if (!user) {
        const newApiKey = generateApiKey();
        console.log(`INFO: Generated new API key: ${newApiKey.substring(0, 10)}...`); // Log prefix only
        const newUserInput = {
            googleId: googleId,
            email: email,
            name: name || null,
            image: image || null,
            apiKey: newApiKey,
        };
        console.log("INFO: Attempting to create new user with data:", { email: newUserInput.email, name: newUserInput.name });

        try {
            user = await prisma.user.create({ data: newUserInput });
            console.log(`INFO: Successfully created new user with email: ${user.email} and ID: ${user.id}`);
        } catch (dbError) {
            console.error("ERROR: Database error during user creation:", dbError);
            throw dbError;
        }
      } else {
        console.log(`INFO: Checking if user details need update for user ID: ${user.id}`);
        if (user.name !== (name || null) || user.image !== (image || null)) {
          console.log("INFO: User details changed. Attempting to update user:", { id: user.id, email: user.email });
          const updateData = { 
            name: name || null,
            image: image || null,
          };
          try {
              user = await prisma.user.update({ where: { id: user.id }, data: updateData});
              console.log(`INFO: Successfully updated user details for ID: ${user.id}`);
          } catch (dbError) {
              console.error("ERROR: Database error during user update:", dbError);
              throw dbError; 
          }
        } else {
            console.log(`INFO: User details unchanged for user ID: ${user.id}. No update needed.`);
        }
      }
  
      console.log(`INFO: Preparing success response for user ID: ${user.id}`);
      const userClientData = {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
        creditsRemaining: user.credits,
        canRecharge: user.recharged,
      };

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
  