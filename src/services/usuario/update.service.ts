import { Usuario } from '../../models/usuario.model';
import { IUpdateUsuarioRepository, UpdateUsuarioDTO } from '../../repositories/usuario/update.repository';

export interface IUpdateUsuarioService {
  handle(id: string, data: UpdateUsuarioDTO): Promise<Usuario>;
}

export class UpdateUsuarioService implements IUpdateUsuarioService {
  constructor(private readonly updateUsuarioRepository: IUpdateUsuarioRepository) {}

  async handle(id: string, data: UpdateUsuarioDTO): Promise<Usuario> {
    const usuarioAtualizado = await this.updateUsuarioRepository.handle(id, data);

    return usuarioAtualizado;
  }
}
