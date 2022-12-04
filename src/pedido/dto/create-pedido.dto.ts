import { ApiProperty } from '@nestjs/swagger';

export class CreatePedidoDto {
  @ApiProperty()
  produtosId: number[];

  @ApiProperty()
  clienteId: number;
}
