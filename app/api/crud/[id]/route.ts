import { NextResponse } from 'next/server';
import { updateCrudItem, deleteCrudItem } from '@/lib/db/crudItems';
import { getUserByGoogleId, updateUserCredits } from '@/lib/db/users';
import { recordApiUsage } from '@/lib/db/apiUsage';

// Update a CRUD item
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { value, userId } = await request.json();
    const { id } = params;
    
    if (value === undefined || !userId) {
      return NextResponse.json(
        { success: false, message: 'Value and userId are required' },
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
    
    // Update item
    const updatedItem = await updateCrudItem(id, value);
    
    // Deduct one credit
    await updateUserCredits(
      user.id,
      user.creditsRemaining - 1,
      user.creditsUsed + 1,
      user.canRecharge
    );

    // Record API usage
    await recordApiUsage(userId, `/api/crud/${id}`, 'PUT', 200);

    return NextResponse.json({
      success: true,
      data: updatedItem,
      message: 'Item updated successfully'
    });
    
  } catch (error) {
    console.error('Error updating CRUD item:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update item', error: String(error) },
      { status: 500 }
    );
  }
}

// Delete a CRUD item
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const { id } = params;
    
    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID is required' },
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
    
    // Delete item
    const deleted = await deleteCrudItem(id);
    
    if (!deleted) {
      return NextResponse.json(
        { success: false, message: 'Item not found or already deleted' },
        { status: 404 }
      );
    }
    
    // Deduct one credit
    await updateUserCredits(
      user.id,
      user.creditsRemaining - 1,
      user.creditsUsed + 1,
      user.canRecharge
    );

    // Record API usage
    await recordApiUsage(userId, `/api/crud/${id}`, 'DELETE', 200);

    return NextResponse.json({
      success: true,
      data: null,
      message: 'Item deleted successfully'
    });
    
  } catch (error) {
    console.error('Error deleting CRUD item:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete item', error: String(error) },
      { status: 500 }
    );
  }
}
// Note: The above code assumes that the functions `updateCrudItem`, `deleteCrudItem`,