import { NextResponse } from 'next/server';
import { rechargeUserCredits } from '@/lib/db/users';
import { recordApiUsage } from '@/lib/db/apiUsage';

// Define how many credits are added on recharge
const RECHARGE_CREDIT_AMOUNT = 4;

export async function POST(request: Request) {
  try {
    const { userId } = await request.json(); 
    
    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID is required' }, 
        { status: 400 }
      );
    }

    const updatedUser = await rechargeUserCredits(userId, RECHARGE_CREDIT_AMOUNT);
    
    await recordApiUsage(userId, '/api/credits/recharge', 'POST', 200);

    const responseData = {
      id: updatedUser.id,
      email: updatedUser.email,
      credits: updatedUser.credits,
      recharged: updatedUser.recharged,
    };

    return NextResponse.json({
      success: true,
      data: responseData,
      message: `Successfully recharged ${RECHARGE_CREDIT_AMOUNT} credits.`
    });
    
  } catch (error) {
    console.error('Credit recharge error:', error);
    
    if (error instanceof Error && error.message === 'User has already recharged') {
      return NextResponse.json(
        { success: false, message: 'Recharge not available or already used.' },
        { status: 403 }
      );
    }
    
    if (error instanceof Error && error.message === 'User not found') {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }
    
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