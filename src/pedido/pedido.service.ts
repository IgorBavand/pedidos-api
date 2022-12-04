import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PedidoEntity } from './entities/pedido.entity';
import { PedidoRepository } from './repositories/pedido.repository';

@Injectable()
export class PedidoService {
  constructor(private readonly pedidoRepository: PedidoRepository) {}

  async create(createPedidoDto: CreatePedidoDto) {
    return this.pedidoRepository.create(createPedidoDto);
  }

  async findAll(): Promise<PedidoEntity[]> {
    return this.pedidoRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} pedido`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
