import { prisma } from "@/lib/db";

/**
 * @description Validates the API key, checks if the user has enough credits, and decrements the credits.
 * @param apiKey
 * @returns { user, error } @object
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