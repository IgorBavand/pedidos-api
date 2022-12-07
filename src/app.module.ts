import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PedidoModule } from './pedido/pedido.module';
import { ProdutoModule } from './produto/produto.module';
import { ClienteModule } from './cliente/cliente.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [PedidoModule, ProdutoModule, ClienteModule, UsuarioModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
