import { IFindOneUsuarioRepository } from '../../repositories/usuario/find-one.repository';

export interface ILoginUsuarioService {
  handle(email: string, senha: string): Promise<string | null>;
}

export class LoginUsuarioService implements ILoginUsuarioService {
  constructor(private readonly findOneUsuarioRepository: IFindOneUsuarioRepository) {}  

  async handle(email: string, senha: string): Promise<string | null> {
    const usuario = await this.findOneUsuarioRepository.findByEmail(email);

    if (!usuario) {
      return null;
    }

    if (usuario.senha !== senha) {
      return null;
    }

    return usuario.id;
  }
}
