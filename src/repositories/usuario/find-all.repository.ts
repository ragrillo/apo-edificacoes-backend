import { Usuario } from '../../models/usuario.model';

export interface IFindAllUsuariosRepository {
  handle: () => Promise<Usuario[]>;
}

export class FindAllUsuariosRepository implements IFindAllUsuariosRepository {
  async handle(): Promise<Usuario[]> {
    const usuarios = [
      {
        id: '1',
        nomeCompleto: 'John Doe',
        email: 'john.doe@xample.com',
        senha: '123456',
      }
    ];

    return usuarios;
  }
}
