import { ObjectId } from 'mongodb';
import { FormularioDTO, FormularioModel } from '../models/formulario.model';
import MongoClient from '../database/mongo.database';
import IBaseRepository from './base.repository';

interface IFormularioRepository extends IBaseRepository<FormularioModel, FormularioDTO> { }

class FormularioMongoRepository implements IFormularioRepository {
  async create(data: FormularioDTO): Promise<void> {
    await MongoClient.db.collection<Omit<FormularioModel, 'id'>>('formularios').insertOne(data);
  }

  async findAll(): Promise<FormularioModel[]> {
    const formularios: FormularioModel[] = await MongoClient.db.collection<FormularioModel>('formularios').find().toArray();

    return formularios;
  }

  async findById(id: string): Promise<FormularioModel> {
    const formulario: FormularioModel | null = await MongoClient.db.collection<FormularioModel>('formularios').findOne({ _id: new ObjectId(id) });

    if (!formulario) {
      throw new Error('Formulário não encontrado');
    }

    return formulario;
  }

  async update(id: string, data: FormularioDTO): Promise<void> {
    await MongoClient.db.collection<FormularioModel>('formularios').updateOne({ _id: new ObjectId(id) }, { $set: data });
  }

  async remove(id: string): Promise<void> {
    await MongoClient.db.collection<FormularioModel>('formularios').deleteOne({ _id: new ObjectId(id) });
  }
}

export { IFormularioRepository, FormularioMongoRepository };
