import { Usuario } from '../../models/usuario.model';
import { IFindOneUsuarioRepository } from '../../repositories/usuario/find-one.repository';

export interface IFindOneUsuarioService {
  findById(id: string): Promise<Usuario | null>;
  findByEmail(email: string): Promise<Usuario | null>;
}

export class FindOneUsuarioService implements IFindOneUsuarioService {
  constructor(private readonly findOneUsuarioRepository: IFindOneUsuarioRepository) {}

  async findById(id: string): Promise<Usuario | null> {
    return await this.findOneUsuarioRepository.findById(id);
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    return await this.findOneUsuarioRepository.findByEmail(email);
  }
}
