import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PedidoModule } from './pedido/pedido.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [PedidoModule, ProdutoModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
