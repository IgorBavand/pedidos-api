/*
  Warnings:

  - The primary key for the `ProdutosPedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pedidoId` on the `ProdutosPedido` table. All the data in the column will be lost.
  - You are about to drop the column `produtoId` on the `ProdutosPedido` table. All the data in the column will be lost.
  - Added the required column `pedido_id` to the `ProdutosPedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `produto_id` to the `ProdutosPedido` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ProdutosPedido` DROP FOREIGN KEY `ProdutosPedido_pedidoId_fkey`;

-- DropForeignKey
ALTER TABLE `ProdutosPedido` DROP FOREIGN KEY `ProdutosPedido_produtoId_fkey`;

-- AlterTable
ALTER TABLE `ProdutosPedido` DROP PRIMARY KEY,
    DROP COLUMN `pedidoId`,
    DROP COLUMN `produtoId`,
    ADD COLUMN `pedido_id` INTEGER NOT NULL,
    ADD COLUMN `produto_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`pedido_id`, `produto_id`);

-- AddForeignKey
ALTER TABLE `ProdutosPedido` ADD CONSTRAINT `ProdutosPedido_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `Pedido`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProdutosPedido` ADD CONSTRAINT `ProdutosPedido_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
