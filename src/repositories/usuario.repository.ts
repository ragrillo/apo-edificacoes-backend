import { ObjectId } from 'mongodb';
import { UsuarioModel, UsuarioDTO } from '../models/usuario.model';

import MongoClient from '../database/mongo.database';
import IBaseRepository from './base.repository';

interface IUsuarioRepository extends IBaseRepository<UsuarioModel, UsuarioDTO> {
  findByEmail(email: string): Promise<UsuarioModel>;
}

class UsuarioMongoRepository implements IUsuarioRepository {
  async create(data: UsuarioDTO): Promise<void> {
    await MongoClient.db.collection<Omit<UsuarioModel, 'id'>>('usuarios').insertOne(data);
  }

  async findAll(): Promise<UsuarioModel[]> {
    const usuarios: UsuarioModel[] = await MongoClient.db.collection<UsuarioModel>('usuarios').find().toArray();

    return usuarios;
  }

  async findById(id: string): Promise<UsuarioModel> {
    const usuario: UsuarioModel | null = await MongoClient.db.collection<UsuarioModel>('usuarios').findOne({ _id: new ObjectId(id) });

    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    return usuario;
  }

  async findByEmail(email: string): Promise<UsuarioModel> {
    const usuario: UsuarioModel | null = await MongoClient.db.collection<UsuarioModel>('usuarios').findOne({ email });

    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    return usuario;
  }

  async update(id: string, data: UsuarioDTO): Promise<void> {
    await MongoClient.db.collection<UsuarioModel>('usuarios').updateOne({ _id: new ObjectId(id) }, { $set: data });
  }

  async remove(id: string): Promise<void> {
    await MongoClient.db.collection<UsuarioModel>('usuarios').deleteOne({ _id: new ObjectId(id) });
  }
}

export { IUsuarioRepository, UsuarioMongoRepository };
