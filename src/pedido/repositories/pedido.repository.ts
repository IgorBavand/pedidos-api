import { Injectable } from '@nestjs/common';
import { Pedido } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePedidoDto } from '../dto/create-pedido.dto';
import { PedidoEntity } from '../entities/pedido.entity';
import { EStatusPedido } from '../enums/status-pedido.enum';

@Injectable()
export class PedidoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Pedido[]> {
    return this.prisma.pedido.findMany({
      include: {
        produtos: {
          select: {
            produto: {
              select: {
                id: true,
                nome: true,
                preco: true,
              },
            },
          },
        },
        cliente: true,
      },
    });
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
    produtosPedido.forEach((p) => (valorFinal = valorFinal + p.preco));

    const pedido = await this.prisma.pedido.create({
      data: {
        valorTotal: valorFinal,
      },
    });

    produtosPedido.forEach(
      async (p) =>
        await this.prisma.produtosPedido.create({
          data: {
            pedidoId: pedido.id,
            produtoId: p.id,
          },
        }),
    );

    return pedido;
  }

  async findOne(id: number): Promise<PedidoEntity> {
    return this.prisma.pedido.findUnique({
      where: {
        id,
      },
      include: {
        produtos: {
          select: {
            produto: true,
          },
        },
        cliente: {
          select: {
            id: true,
            nome: true,
            cidade: true,
            rua: true,
            email: true,
          },
        },
      },
    });
  }

  async sendPedido(id: number): Promise<PedidoEntity> {
    return this.prisma.pedido.update({
      where: {
        id,
      },
      data: {
        statusPedido: EStatusPedido.ENVIADO,
      },
    });
  }
}
