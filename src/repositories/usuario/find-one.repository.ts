import { ObjectId } from 'mongodb';
import { MongoClient } from '../../database/mongo.database';
import { Usuario } from '../../models/usuario.model';

export interface IFindOneUsuarioRepository {
  findById(id: string): Promise<Usuario | null>;
  findByEmail(email: string): Promise<Usuario | null>;
}

export class FindOneUsuarioRepository implements IFindOneUsuarioRepository {
  async findById(id: string): Promise<Usuario | null> {
    const usuario = await MongoClient.db.collection<Omit<Usuario, 'id'>>('usuarios').findOne({ _id: new ObjectId(id) });

    if (!usuario) {
      return null;
    }

    return { id: usuario._id.toHexString(), ...usuario };
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    const usuario = await MongoClient.db.collection<Omit<Usuario, 'id'>>('usuarios').findOne({ email });

    if (!usuario) {
      return null;
    }

    return { id: usuario._id.toHexString(), ...usuario };
  }
}
