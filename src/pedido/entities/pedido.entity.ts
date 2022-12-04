import { Pedido } from '@prisma/client';

export class PedidoEntity implements Pedido {
  id: number;
  valorTotal: number;
}
