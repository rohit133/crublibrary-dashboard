import { prisma } from "@/lib/db";

/**
 * @description Validates an API key, checks for sufficient credits, and decrements the credit count for the associated user.
 * Finds a user by API key. If found and credits > 0, decrements credits and increments creditsUsed.
 * @param {string} apiKey - The API key provided by the client.
 * @returns {Promise<{ user: { id: string } | null, error: { status: number, message: string } | null }>} 
 * An object containing:
 *  - `user`: An object with the user's `id` if validation and decrement are successful, otherwise `null`.
 *  - `error`: An object with `status` (HTTP status code) and `message` if validation fails or an error occurs, otherwise `null`.
 * Possible errors:
 *  - 403: Invalid API Key
 *  - 429: Request limit exceeded (credits <= 0)
 *  - 500: Internal server error during database operation
 */
export async function validateKeyAndDecrementCredits(apiKey: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { apiKey },
            select: { id: true, credits: true } // Select only needed fields
        });

        if (!user) {
            return { user: null, error: { status: 403, message: 'Invalid API Key' } };
        }

        if (user.credits <= 0) {
            return { user: null, error: { status: 429, message: 'Request limit exceeded. Please recharge credits.' } };
        }

        // Decrement credits in the database *after* checks pass
        const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data: {
                credits: { decrement: 1 },
                creditsUsed: { increment: 1 }
            },
            select: { id: true } // Only need ID for associating items
        });

        return { user: updatedUser, error: null }; // Return only necessary user info (id)

    } catch (dbError) {
        console.error("Error during key validation/credit decrement:", dbError);
        return { user: null, error: { status: 500, message: 'Internal server error during validation' } };
    }
}