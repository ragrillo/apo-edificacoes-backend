import { Usuario } from '../../models/usuario.model';
import { IFindAllUsuariosRepository } from '../../repositories/usuario/find-all.repository';

export interface IFindAllUsuariosService {
  handle(): Promise<Usuario[]>;
}

export class FindAllUsuariosService implements IFindAllUsuariosService {
  constructor(
    private readonly findAllUsuarioRepository: IFindAllUsuariosRepository,
  ) { }

  async handle(): Promise<Usuario[]> {
    const usuarios = await this.findAllUsuarioRepository.handle();
    return usuarios;
  }
}