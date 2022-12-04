import { Pedido } from '@prisma/client';

export class PedidoEntity implements Pedido {
  id: number;
  statusPedido: string;
  valorTotal: number;
  clienteId: number;
}
