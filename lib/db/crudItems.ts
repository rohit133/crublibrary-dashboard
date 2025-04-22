import { prisma } from '@/lib/db';
import crypto from 'crypto';
import { CrudItem } from '@/types';

/**
 * @description Creates a new CRUD item associated with a user.
 * Generates a random transaction hash (txHash) for the item.
 * @param {string} userId - The ID of the user creating the item.
 * @param {number} value - The numerical value to store in the item.
 * @returns {Promise<CrudItem>} A promise that resolves to the newly created CrudItem object.
 * @throws {Error} If there is a database error during creation.
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
 * @description Retrieves all CRUD items for a specific user, ordered by creation date (descending).
 * @param {string} userId - The ID of the user whose items are to be fetched.
 * @returns {Promise<CrudItem[]>} A promise that resolves to an array of CrudItem objects.
 * @throws {Error} If there is a database error during retrieval.
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
 * @description Updates the value of an existing CRUD item.
 * @param {string} idString - The string representation of the item's ID.
 * @param {number} value - The new numerical value for the item.
 * @returns {Promise<CrudItem>} A promise that resolves to the updated CrudItem object.
 * @throws {Error} If the provided idString is not a valid number.
 * @throws {Error} If there is a database error during the update.
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
 * @description Deletes a specific CRUD item by its ID.
 * @param {string} idString - The string representation of the item's ID.
 * @returns {Promise<boolean>} A promise that resolves to `true` if deletion was successful, `false` if the item was not found.
 * @throws {Error} If the provided idString is not a valid number.
 * @throws {Error} If there is a database error during deletion (other than not found).
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
