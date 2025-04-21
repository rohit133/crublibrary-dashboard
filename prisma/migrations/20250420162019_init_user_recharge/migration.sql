/*
  Warnings:

  - You are about to drop the column `credits` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `pictureUrl` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `recharged` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "credits",
DROP COLUMN "pictureUrl",
DROP COLUMN "recharged",
ADD COLUMN     "apiUrl" TEXT,
ADD COLUMN     "canRecharge" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "creditsRemaining" INTEGER NOT NULL DEFAULT 4,
ADD COLUMN     "creditsUsed" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "image" TEXT;
