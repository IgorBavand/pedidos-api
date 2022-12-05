import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PedidoEntity } from './entities/pedido.entity';

@ApiTags('Pedido')
@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  @ApiBody({ type: [CreatePedidoDto] })
  @ApiResponse({ type: [PedidoEntity] })
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
}
