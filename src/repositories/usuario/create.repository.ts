import { Usuario } from '../../models/usuario.model';

export interface CreateUsuarioParams {
  nomeCompleto: string;
  email: string;
  senha: string;
}

export interface ICreateUsuarioRepository {
  handle(data: CreateUsuarioParams): Promise<Usuario>;
}

export class CreateUsuarioRepository implements ICreateUsuarioRepository {
  async handle(data: CreateUsuarioParams): Promise<Usuario> {
    const usuario = {
      id: '1',
      nomeCompleto: data.nomeCompleto,
      email: data.email,
      senha: data.senha,
    };

    return usuario;
  }
}
