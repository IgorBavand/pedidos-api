import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { UpdateProdutoDto } from '../dto/update-produto.dto';
import { ProdutoEntity } from '../entities/produto.entity';

@Injectable()
export class ProdutoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<ProdutoEntity[]> {
    return this.prisma.produto.findMany();
  }

  async save(createProdutoDto: CreateProdutoDto): Promise<ProdutoEntity> {
    return this.prisma.produto.create({
      data: createProdutoDto,
    });
  }

  async update(produto: UpdateProdutoDto, id: number): Promise<ProdutoEntity> {
    return this.prisma.produto.update({
      data: {
        ...produto,
        preco: +produto.preco,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<ProdutoEntity> {
    return this.prisma.produto.delete({
      where: {
        id,
      },
    });
  }
}
