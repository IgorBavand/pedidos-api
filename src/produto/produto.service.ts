import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutoEntity } from './entities/produto.entity';
import { ProdutoRepository } from './repositories/produto.repository';

@Injectable()
export class ProdutoService {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  create(createProdutoDto: CreateProdutoDto) {
    return this.produtoRepository.save(createProdutoDto);
  }

  async findAll(): Promise<ProdutoEntity[]> {
    return this.produtoRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.produtoRepository.update(updateProdutoDto, id);
  }

  async remove(id: number): Promise<ProdutoEntity> {
    return this.produtoRepository.delete(id);
  }
}
