import { prisma } from '@/lib/db';

/**
 * Get a user by their Google ID
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
      apiUrl: user.apiUrl,
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
 * Update user credits
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
 * Recharge user credits
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