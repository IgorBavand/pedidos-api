import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AutenticacaoService } from '../service/autenticacao.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private autenticacaoService: AutenticacaoService) {
    super({
      usernameField: 'email',
      passwordField: 'senha',
    });
  }

  async validate(email: string, senha: string): Promise<any> {
    const user = await this.autenticacaoService.validateUser(email, senha);

    if (!user) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    return user;
  }
}
