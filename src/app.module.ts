import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [PedidoModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
