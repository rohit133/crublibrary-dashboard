import { prisma } from '@/lib/db';
import { getUserByGoogleId } from './users';

/**
 * @description Records an API usage event in the database.
 * If the provided userId looks like a Google ID, it attempts to find the internal user ID first.
 * Logs the user ID, endpoint (method + path), and status code.
 * Catches errors internally and returns false to avoid disrupting the main operation.
 * @param {string} userId - The internal user ID or Google ID of the user making the request.
 * @param {string} endpoint - The API endpoint path being accessed (e.g., '/api/items').
 * @param {string} method - The HTTP method used (e.g., 'GET', 'POST').
 * @param {number} statusCode - The HTTP status code returned by the endpoint.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the log was created successfully, `false` otherwise.
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
 * @description Retrieves all API usage logs for a specific user, ordered by time (most recent first).
 * @param {string} userId - The internal ID of the user whose logs are to be fetched.
 * @returns {Promise<ApiUsageLog[]>} A promise that resolves to an array of ApiUsageLog objects.
 * @throws {Error} If there is a database error during retrieval.
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
 * @description Retrieves aggregated API usage statistics for a specific user.
 * Provides counts grouped by endpoint and status code, as well as the total request count.
 * Useful for displaying usage information on a dashboard.
 * @param {string} userId - The internal ID of the user whose stats are to be fetched.
 * @returns {Promise<{ endpointStats: object[], statusStats: object[], totalCount: number }>} A promise that resolves to an object containing usage statistics:
 *  - `endpointStats`: Array of objects with { endpoint: string, _count: { endpoint: number } }.
 *  - `statusStats`: Array of objects with { statusCode: number, _count: { statusCode: number } }.
 *  - `totalCount`: Total number of API requests recorded for the user.
 * @throws {Error} If there is a database error during aggregation.
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