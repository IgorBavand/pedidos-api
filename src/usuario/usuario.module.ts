import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioRepository } from './repositories/usuario.repository';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaService, UsuarioRepository],
  exports: [UsuarioService],
})
export class UsuarioModule {}
