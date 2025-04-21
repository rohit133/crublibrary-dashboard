import { prisma } from '@/lib/db';
import { getUserByGoogleId } from './users';

/**
 * Record API usage
 */
export async function recordApiUsage(
  userId: string, 
  endpoint: string, 
  method: string,
  statusCode: number
) {
  try {
    // First, make sure to get the internal user ID if a googleId was provided
    let internalUserId = userId;
    
    // Check if this looks like a Google ID rather than internal ID
    if (userId && userId.length > 30) {
      const user = await getUserByGoogleId(userId);
      if (user) {
        internalUserId = user.id;
      } else {
        console.error('Could not find user with Google ID:', userId);
        return false;
      }
    }
    
    await prisma.apiUsageLog.create({
      data: {
        userId: internalUserId,
        endpoint: `${method} ${endpoint}`,
        statusCode,
      },
    });
    
    return true;
  } catch (error) {
    console.error('Error recording API usage:', error);
    // We don't want to fail the main operation if logging fails
    return false;
  }
}

/**
 * Get API usage for a user
 */
export async function getApiUsageByUserId(userId: string) {
  try {
    const usage = await prisma.apiUsageLog.findMany({
      where: { userId },
      orderBy: { occurredAt: 'desc' },
    });
    
    return usage;
  } catch (error) {
    console.error('Error getting API usage:', error);
    throw error;
  }
}

/**
 * Get API usage stats for a user
 * This is useful for dashboards
 */
export async function getApiUsageStatsByUserId(userId: string) {
  try {
    // Get counts by endpoint
    const endpointStats = await prisma.apiUsageLog.groupBy({
      by: ['endpoint'],
      where: { userId },
      _count: {
        endpoint: true,
      },
    });
    
    // Get counts by status code
    const statusStats = await prisma.apiUsageLog.groupBy({
      by: ['statusCode'],
      where: { userId },
      _count: {
        statusCode: true,
      },
    });
    
    // Get total count
    const totalCount = await prisma.apiUsageLog.count({
      where: { userId },
    });
    
    return {
      endpointStats,
      statusStats,
      totalCount,
    };
  } catch (error) {
    console.error('Error getting API usage stats:', error);
    throw error;
  }
}