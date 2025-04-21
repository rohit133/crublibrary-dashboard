import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// Define how many credits are added on recharge
const RECHARGE_CREDIT_AMOUNT = 4;

export async function POST(request: Request) {
  try {
    // TODO: Implement proper authentication to get the user ID from the session/token
    // For now, assuming userId is passed in the body, which is insecure for a real app.
    const { userId } = await request.json(); 
    
    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID is required' }, 
        { status: 400 }
      );
    }

    // Get user by their internal ID using Prisma
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }
    
    // Check if user can recharge
    if (!user.canRecharge) {
      return NextResponse.json(
        { success: false, message: 'Recharge not available or already used.' },
        { status: 403 }
      );
    }
    
    // Add credits and set canRecharge to false using Prisma
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        creditsRemaining: user.creditsRemaining + RECHARGE_CREDIT_AMOUNT,
        canRecharge: false,
      },
    });

    // TODO: Consider recording API usage if needed (removed for now)
    // await recordApiUsage(userId, '/api/credits/recharge', 'POST', 200);

    // Return only necessary data
    const responseData = {
      id: updatedUser.id,
      email: updatedUser.email,
      creditsRemaining: updatedUser.creditsRemaining,
      canRecharge: updatedUser.canRecharge,
    };

    return NextResponse.json({
      success: true,
      data: responseData,
      message: `Successfully recharged ${RECHARGE_CREDIT_AMOUNT} credits.`
    });
    
  } catch (error) {
    console.error('Credit recharge error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error during recharge';
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to recharge credits', 
        error: process.env.NODE_ENV === 'development' ? errorMessage : 'Internal Server Error' 
      },
      { status: 500 }
    );
  }
}
