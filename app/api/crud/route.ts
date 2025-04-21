import { NextResponse } from 'next/server';
import { createCrudItem, getCrudItemsByUserId } from '@/lib/db/crudItems';
import { updateUserCredits, getUserByGoogleId } from '@/lib/db/users';
import { recordApiUsage } from '@/lib/db/apiUsage';

// Create a new CRUD item
export async function POST(request: Request) {
  try {
    const { userId, value } = await request.json();
    
    if (!userId || value === undefined) {
      return NextResponse.json(
        { success: false, message: 'User ID and value are required' },
        { status: 400 }
      );
    }

    // Get user to check credits
    const user = await getUserByGoogleId(userId);
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }
    
    // Check if user has enough credits
    if (user.creditsRemaining <= 0) {
      return NextResponse.json(
        { success: false, message: 'Not enough credits' },
        { status: 403 }
      );
    }
    
    // Create item
    const newItem = await createCrudItem(user.id, value);
    
    // Deduct one credit
    await updateUserCredits(
      user.id,
      user.creditsRemaining - 1,
      user.creditsUsed + 1,
      user.canRecharge
    );

    // Record API usage
    await recordApiUsage(userId, '/api/crud', 'POST', 201);

    return NextResponse.json({
      success: true,
      data: newItem,
      message: 'Item created successfully'
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error creating CRUD item:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create item', error: String(error) },
      { status: 500 }
    );
  }
}

// Get all CRUD items for a user
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID is required' },
        { status: 400 }
      );
    }

    // Get user to check if exists
    const user = await getUserByGoogleId(userId);
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }
    
    // Get items
    const items = await getCrudItemsByUserId(user.id);

    // Record API usage
    await recordApiUsage(userId, '/api/crud', 'GET', 200);

    return NextResponse.json({
      success: true,
      data: items,
      message: 'Items retrieved successfully'
    });
    
  } catch (error) {
    console.error('Error getting CRUD items:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to get items', error: String(error) },
      { status: 500 }
    );
  }
}
