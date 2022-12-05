import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteEntity } from './entities/cliente.entity';
import { ClienteRepository } from './repositories/cliente.repository';

@Injectable()
export class ClienteService {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  private readonly ERROR_CLIENTE_NOT_FOUND: string = 'Cliente não encontrado';

  async create(createClienteDto: CreateClienteDto): Promise<ClienteEntity> {
    return this.clienteRepository.create(createClienteDto);
  }

  async findAll(): Promise<ClienteEntity[]> {
    return this.clienteRepository.findAll();
  }

  async findOne(id: number): Promise<ClienteEntity> {
    const cliente = await this.clienteRepository.findOne(id);

    if (!cliente) {
      throw new NotFoundError();
    }

    return cliente;
  }

  async update(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<ClienteEntity> {
    return this.clienteRepository.update(id, updateClienteDto);
  }

  async remove(id: number): Promise<ClienteEntity> {
    return this.clienteRepository.remove(id);
  }
}
