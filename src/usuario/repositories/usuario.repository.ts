import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UsuarioEntity } from '../entities/usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<UsuarioEntity[]> {
    return this.prisma.usuario.findMany();
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioEntity> {
    return this.prisma.usuario.create({
      data: createUsuarioDto,
    });
  }

  async findByEmail(email: string): Promise<UsuarioEntity> {
    return this.prisma.usuario.findUnique({
      where: {
        email,
      },
    });
  }
}
