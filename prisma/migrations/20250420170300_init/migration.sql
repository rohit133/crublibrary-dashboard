/*
  Warnings:

  - You are about to drop the column `canRecharge` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `creditsRemaining` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "canRecharge",
DROP COLUMN "creditsRemaining",
ADD COLUMN     "credits" INTEGER NOT NULL DEFAULT 4,
ADD COLUMN     "recharged" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "txHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RechargeLog" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "attemptedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "successful" BOOLEAN NOT NULL,

    CONSTRAINT "RechargeLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApiUsageLog" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "statusCode" INTEGER NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApiUsageLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RechargeLog" ADD CONSTRAINT "RechargeLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiUsageLog" ADD CONSTRAINT "ApiUsageLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
