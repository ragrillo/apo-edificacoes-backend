import { IHashPasswordAdapter } from '../../adapters/hash-password.adapter';
import { IJwtTokenAdapter } from '../../adapters/jwt-token.adapter';
import { Edificacao } from '../../models/usuario.model';
import { IFindOneUsuarioRepository } from '../../repositories/usuario/find-one.repository';

export interface LoginPayload {
  id: string;
  cargo: number;
  edificacao: Edificacao;
}

export interface ILoginUsuarioService {
  handle(email: string, senha: string): Promise<string | null>;
}

export class LoginUsuarioService implements ILoginUsuarioService {
  constructor(
    private readonly findOneUsuarioRepository: IFindOneUsuarioRepository,
    private readonly hashPasswordAdapter: IHashPasswordAdapter,
    private readonly jwtTokenAdapter: IJwtTokenAdapter,
  ) { }

  async handle(email: string, senha: string): Promise<string | null> {
    const usuario = await this.findOneUsuarioRepository.findByEmail(email);

    if (!usuario) {
      return null;
    }

    const isPasswordsMatch = await this.hashPasswordAdapter.compare(senha, usuario.senha);

    if (!isPasswordsMatch) {
      return null;
    }

    const { id, cargo, edificacao } = usuario;
    const payload: LoginPayload = { id, cargo, edificacao };
    const token = await this.jwtTokenAdapter.sign(payload);

    return token;
  }
}
