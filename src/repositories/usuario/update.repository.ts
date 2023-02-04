import { ObjectId } from 'mongodb';
import { MongoClient } from '../../database/mongo.database';
import { Usuario } from '../../models/usuario.model';

export interface UpdateUsuarioDTO extends Partial<Usuario> { }

export interface IUpdateUsuarioRepository {
  handle(id: string, data: UpdateUsuarioDTO): Promise<Usuario>;
}

export class UpdateUsuarioRepository implements IUpdateUsuarioRepository {
  async handle(id: string, data: UpdateUsuarioDTO): Promise<Usuario> {
    await MongoClient.db.collection('usuarios').updateOne({ _id: new ObjectId(id) }, { $set: data });

    const usuario = await MongoClient.db.collection <Omit<Usuario, 'id'>>('usuarios').findOne({ _id: new ObjectId(id) });

    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }
 
    return { id: usuario._id.toHexString(), ...usuario };
  }
}
