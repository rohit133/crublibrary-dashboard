import { NextResponse } from 'next/server';
import { rechargeUserCredits } from '@/lib/db/users';
import { recordApiUsage } from '@/lib/db/apiUsage';
import { corsHeaders } from "@/lib/cors-header";

// Define how many credits are added on recharge
const RECHARGE_CREDIT_AMOUNT = 4;

/**
 * @description API route handler for recharging user credits.
 * Accepts a POST request with a userId in the body.
 * Calls the database function to recharge credits for the specified user if they haven't recharged already.
 * Records the API usage.
 * @param {Request} request - The incoming request object. Must contain a JSON body with 'userId'.
 * @returns {Promise<NextResponse>} A promise that resolves to a Next.js response object.
 * Returns 200 with { success: true, data: { id, email, credits, recharged }, message } on successful recharge.
 * Returns 400 if 'userId' is missing in the request body.
 * Returns 403 if the user has already recharged.
 * Returns 404 if the user is not found.
 * Returns 500 for internal server errors.
 */
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { userId } = await request.json(); 
    
    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID is required' }, 
        { status: 400, headers: corsHeaders }
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
    }, { status: 200, headers: corsHeaders });
    
  } catch (error) {
    console.error('Credit recharge error:', error);
    
    if (error instanceof Error && error.message === 'User has already recharged') {
      return NextResponse.json(
        { success: false, message: 'Recharge not available or already used.' },
        { status: 403, headers: corsHeaders }
      );
    }
    
    if (error instanceof Error && error.message === 'User not found') {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404, headers: corsHeaders }
      );
    }
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error during recharge';
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to recharge credits', 
        error: process.env.NODE_ENV === 'development' ? errorMessage : 'Internal Server Error' 
      },
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