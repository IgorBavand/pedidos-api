import { Module } from '@nestjs/common';
import { UsuarioModule } from '../usuario/usuario.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { CryptoService } from 'src/common/services/crypto.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { AutenticacaoService } from './service/autenticacao.service';
import { AutenticacaoController } from './controller/autenticacao.controller';

@Module({
  imports: [
    UsuarioModule,
    PassportModule,
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AutenticacaoService, LocalStrategy, JwtStrategy, CryptoService],
  controllers: [AutenticacaoController],
})
export class AutenticacaoModule {}
