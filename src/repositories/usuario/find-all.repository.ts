import { MongoClient } from '../../database/mongo.database';
import { Usuario } from '../../models/usuario.model';

export interface IFindAllUsuariosRepository {
  handle: () => Promise<Usuario[]>;
}

export class FindAllUsuariosRepository implements IFindAllUsuariosRepository {
  async handle(): Promise<Usuario[]> {
    const usuarios = await MongoClient.db.collection<Omit<Usuario, 'id'>>('usuarios').find().toArray();

    return usuarios.map(({ _id, ...usuario }) => {
      return { ...usuario, id: _id.toHexString() };
    });
  }
}
