import { Usuario } from '../../models/usuario.model';
import { IFindOneUsuarioRepository } from '../../repositories/usuario/find-one.repository';

export interface IFindOneUsuarioService {
  handle(id: string): Promise<Usuario | null>;
}

export class FindOneUsuarioService implements IFindOneUsuarioService {
  constructor(private readonly findOneUsuarioRepository: IFindOneUsuarioRepository) {}

  async handle(id: string): Promise<Usuario | null> {
    return await this.findOneUsuarioRepository.handle(id);
  }
}
