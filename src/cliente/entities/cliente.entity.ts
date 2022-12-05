import { Cliente } from '@prisma/client';

export class ClienteEntity implements Cliente {
  id: number;
  nome: string;
  email: string;
  cidade: string;
  rua: string;
  createdAt: Date;
}
