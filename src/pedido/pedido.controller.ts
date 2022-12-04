import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { ApiTags } from '@nestjs/swagger';
import { PedidoEntity } from './entities/pedido.entity';

@ApiTags('Pedidos')
@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidoService.create(createPedidoDto);
  }

  @Get()
  findAll() {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PedidoEntity> {
    return this.pedidoService.findOne(+id);
  }

  @Patch(':id/send')
  async sendPedido(@Param('id') id: string): Promise<PedidoEntity> {
    return this.pedidoService.sendPedido(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
  //   return this.pedidoService.update(+id, updatePedidoDto);
  // }
}
