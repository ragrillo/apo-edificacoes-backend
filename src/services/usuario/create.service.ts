import { Usuario } from '../../models/usuario.model';
import { CreateUsuarioParams, ICreateUsuarioRepository } from '../../repositories/usuario/create.repository';

export interface ICreateUsuarioService {
  handle(data: CreateUsuarioParams): Promise<Usuario>;
}

export class CreateUsuarioService implements ICreateUsuarioService {
  constructor(private readonly createUsuarioRepository: ICreateUsuarioRepository) { }

  async handle(data: CreateUsuarioParams): Promise<Usuario> {
    const usuario = await this.createUsuarioRepository.handle(data);

    return usuario;
  }
}
