import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CryptoService } from 'src/common/services/crypto.service';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AutenticacaoService {
  constructor(
    private usuarioService: UsuarioService,
    private cryptoService: CryptoService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usuarioService.findByEmail(email);
    const correctPassword =
      user && (await this.cryptoService.compareHash(password, user.senha));

    if (correctPassword) {
      return { id: user.id, email: user.email };
    }

    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
