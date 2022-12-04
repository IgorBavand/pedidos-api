import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
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

  async findOne(id: number): Promise<PedidoEntity> {
    return this.pedidoRepository.findOne(id);
  }

  async sendPedido(id: number): Promise<PedidoEntity> {
    return this.pedidoRepository.sendPedido(id);
  }

  // update(id: number, updatePedidoDto: UpdatePedidoDto) {
  //   return `This action updates a #${id} pedido`;
  // }
}
