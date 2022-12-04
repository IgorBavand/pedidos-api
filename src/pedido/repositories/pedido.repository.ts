import { Injectable } from '@nestjs/common';
import { Pedido } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePedidoDto } from '../dto/create-pedido.dto';

@Injectable()
export class PedidoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Pedido[]> {
    return this.prisma.pedido.findMany();
  }

  async create(createPedidoDto: CreatePedidoDto) {
    const { produtosId } = createPedidoDto;

    const produtosPedido = await this.prisma.produto.findMany({
      where: {
        id: {
          in: produtosId,
        },
      },
    });

    let valorFinal = 0;
    produtosPedido.forEach(() => (valorFinal = valorFinal + 100));

    console.log(produtosPedido);

    const pedido = await this.prisma.pedido.create({
      data: {
        valorTotal: valorFinal,
      },
    });

    return pedido;
  }
}
