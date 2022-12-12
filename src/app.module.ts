import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PedidoModule } from './pedido/pedido.module';
import { ProdutoModule } from './produto/produto.module';
import { ClienteModule } from './cliente/cliente.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';

@Module({
  imports: [
    PedidoModule,
    ProdutoModule,
    ClienteModule,
    UsuarioModule,
    AutenticacaoModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
