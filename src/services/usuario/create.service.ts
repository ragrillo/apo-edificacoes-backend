import { IHashPasswordAdapter } from '../../adapters/hash-password.adapter';
import { Usuario } from '../../models/usuario.model';
import { CreateUsuarioParams, ICreateUsuarioRepository } from '../../repositories/usuario/create.repository';

export interface ICreateUsuarioService {
  handle(data: CreateUsuarioParams): Promise<Usuario>;
}

export class CreateUsuarioService implements ICreateUsuarioService {
  constructor(
    private readonly createUsuarioRepository: ICreateUsuarioRepository,
    private readonly hashPasswordAdapter: IHashPasswordAdapter,
  ) { }

  async handle(data: CreateUsuarioParams): Promise<Usuario> {
    data.senha = await this.hashPasswordAdapter.hash(data.senha);

    const usuario = await this.createUsuarioRepository.handle(data);

    return usuario;
  }
}
