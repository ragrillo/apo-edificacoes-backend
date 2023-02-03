import { ObjectId } from 'mongodb';
import { MongoClient } from '../../database/mongo.database';
import { Usuario } from '../../models/usuario.model';

export interface IFindOneUsuarioRepository {
  handle(id: string): Promise<Usuario | null>;
}

export class FindOneUsuarioRepository implements IFindOneUsuarioRepository {
  async handle(id: string): Promise<Usuario | null> {
    const usuario = await MongoClient.db.collection<Omit<Usuario, 'id'>>('usuarios').findOne({ _id: new ObjectId(id) });

    if (!usuario) {
      return null;
    }

    return { id: usuario._id.toHexString(), ...usuario };
  }
}
