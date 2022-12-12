import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PedidoEntity } from './entities/pedido.entity';
import { JwtAuthGuard } from 'src/autenticacao/guards/jwt-auth.guard';

@ApiTags('Pedido')
@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  @ApiBody({ type: [CreatePedidoDto] })
  @ApiResponse({ type: [PedidoEntity] })
  @UseGuards(JwtAuthGuard)
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidoService.create(createPedidoDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string): Promise<PedidoEntity> {
    return this.pedidoService.findOne(+id);
  }

  @Patch(':id/send')
  @UseGuards(JwtAuthGuard)
  async sendPedido(@Param('id') id: string): Promise<PedidoEntity> {
    return this.pedidoService.sendPedido(+id);
  }
}
