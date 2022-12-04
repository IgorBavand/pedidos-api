/*
  Warnings:

  - You are about to alter the column `valor_total` on the `Pedido` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `Pedido` MODIFY `valor_total` DOUBLE NOT NULL;
