import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutoRepository } from './repositories/produto.repository';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService, PrismaService, ProdutoRepository],
})
export class ProdutoModule {}
