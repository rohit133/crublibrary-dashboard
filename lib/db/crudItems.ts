import { prisma } from '@/lib/db';
import crypto from 'crypto';
import { CrudItem } from '@/types';

/**
 * Create a new CRUD item
 */
export async function createCrudItem(userId: string, value: number) {
  try {
    // Generate a random transaction hash
    const txHash = crypto.randomBytes(16).toString('hex');
    
    const newItem = await prisma.item.create({
      data: {
        userId,
        value,
        txHash,
      },
    });
    
    return {
      id: newItem.id,
      userId: newItem.userId,
      value: newItem.value,
      txHash: newItem.txHash,
      createdAt: newItem.createdAt,
      updatedAt: newItem.updatedAt
    };
  } catch (error) {
    console.error('Error creating CRUD item:', error);
    throw error;
  }
}

/**
 * Get all CRUD items for a user
 */
export async function getCrudItemsByUserId(userId: string) {
  try {
    const items = await prisma.item.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    
    return items.map((item: {
      id: number;
      userId: string;
      value: number;
      txHash: string;
      createdAt: Date;
      updatedAt: Date;
    }) => ({
      id: item.id,
      userId: item.userId,
      value: item.value,
      txHash: item.txHash,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    }));
  } catch (error) {
    console.error('Error getting CRUD items:', error);
    throw error;
  }
}

/**
 * Update a CRUD item
 */
export async function updateCrudItem(idString: string, value: number) {
  try {
    const id = parseInt(idString, 10);
    
    if (isNaN(id)) {
      throw new Error('Invalid item ID');
    }
    
    const updatedItem = await prisma.item.update({
      where: { id },
      data: { value },
    });
    
    return {
      id: updatedItem.id,
      userId: updatedItem.userId,
      value: updatedItem.value,
      txHash: updatedItem.txHash,
      createdAt: updatedItem.createdAt,
      updatedAt: updatedItem.updatedAt
    };
  } catch (error) {
    console.error('Error updating CRUD item:', error);
    throw error;
  }
}

/**
 * Delete a CRUD item
 */
export async function deleteCrudItem(idString: string) {
  try {
    const id = parseInt(idString, 10);
    
    if (isNaN(id)) {
      throw new Error('Invalid item ID');
    }
    
    await prisma.item.delete({
      where: { id },
    });
    
    return true;
  } catch (error) {
    console.error('Error deleting CRUD item:', error);
    if (error instanceof Error && error.message.includes('Record to delete does not exist')) {
      return false;
    }
    throw error;
  }
}
