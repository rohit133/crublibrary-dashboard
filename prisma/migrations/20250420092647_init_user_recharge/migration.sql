/*
  Warnings:

  - You are about to drop the column `isRecharged` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "isRecharged",
ADD COLUMN     "recharged" BOOLEAN NOT NULL DEFAULT false;
