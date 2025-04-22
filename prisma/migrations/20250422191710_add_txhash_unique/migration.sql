/*
  Warnings:

  - A unique constraint covering the columns `[txHash]` on the table `Item` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Item_txHash_key" ON "Item"("txHash");
