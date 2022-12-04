import { Produto } from '@prisma/client';

export class ProdutoEntity implements Produto {
  id: number;
  nome: string;
  preco: number;
}
