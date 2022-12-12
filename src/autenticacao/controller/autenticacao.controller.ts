import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AutenticacaoService } from '../service/autenticacao.service';

@Controller('login')
export class AutenticacaoController {
  constructor(private autenticacaoService: AutenticacaoService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async login(@Request() req: any) {
    return this.autenticacaoService.login(req.user);
  }
}
