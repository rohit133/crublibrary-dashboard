import { prisma } from '@/lib/db';

/**
 * @description Retrieves a user's essential client-side data based on their Google ID.
 * @param {string} googleId - The Google ID of the user to find.
 * @returns {Promise<object | null>} A promise that resolves to an object containing user details 
 * (id, email, name, image, googleId, apiKey, creditsRemaining, creditsUsed, canRecharge)
 * or `null` if the user is not found.
 * @throws {Error} If there is a database error during retrieval.
 */
export async function getUserByGoogleId(googleId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { googleId },
    });
    
    if (!user) return null;
    
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      image: user.image,
      googleId: user.googleId,
      apiKey: user.apiKey,
      creditsRemaining: user.credits,
      creditsUsed: user.creditsUsed,
      canRecharge: !user.recharged,
    };
  } catch (error) {
    console.error('Error getting user by Google ID:', error);
    throw error;
  }
}

/**
 * @description Updates the credit balance, usage count, and recharged status for a specific user.
 * @param {string} userId - The internal ID of the user to update.
 * @param {number} credits - The new credit balance.
 * @param {number} creditsUsed - The new total credits used count.
 * @param {boolean} recharged - The new recharged status.
 * @returns {Promise<User>} A promise that resolves to the updated User object from Prisma.
 * @throws {Error} If there is a database error during the update.
 */
export async function updateUserCredits(
  userId: string, 
  credits: number, 
  creditsUsed: number,
  recharged: boolean
) {
  try {
    return await prisma.user.update({
      where: { id: userId },
      data: {
        credits,
        creditsUsed,
        recharged,
      },
    });
  } catch (error) {
    console.error('Error updating user credits:', error);
    throw error;
  }
}

/**
 * @description Adds a specified amount of credits to a user's balance and marks them as recharged.
 * Checks if the user exists and has not already recharged before proceeding.
 * Logs the recharge event.
 * @param {string} userId - The internal ID of the user to recharge.
 * @param {number} amount - The number of credits to add.
 * @returns {Promise<User>} A promise that resolves to the updated User object from Prisma after recharge.
 * @throws {Error} If the user is not found.
 * @throws {Error} If the user has already recharged.
 * @throws {Error} If there is a database error during the update or logging.
 */
export async function rechargeUserCredits(userId: string, amount: number) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    
    if (!user) {
      throw new Error('User not found');
    }
    
    if (user.recharged) {
      throw new Error('User has already recharged');
    }
    
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        credits: user.credits + amount,
        recharged: true,
      },
    });
    
    await prisma.rechargeLog.create({
      data: {
        userId,
        successful: true,
      },
    });
    
    return updatedUser;
  } catch (error) {
    console.error('Error recharging user credits:', error);
    throw error;
  }
}