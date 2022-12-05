import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClienteRepository } from './repositories/cliente.repository';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService, PrismaService, ClienteRepository],
})
export class ClienteModule {}
