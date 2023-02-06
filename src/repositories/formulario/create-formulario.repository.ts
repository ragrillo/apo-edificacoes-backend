import { MongoClient } from '../../database/mongo.database';
import { Formulario } from '../../models/formulario.model';

export interface CreateFormularioDTO extends Formulario {}

export interface ICreateFormularioRepository {
  handle(formulario: CreateFormularioDTO): Promise<Formulario>;
}

export class CreateFormularioRepository implements ICreateFormularioRepository {
  async handle(data: CreateFormularioDTO): Promise<Formulario> {
    const { insertedId } = await MongoClient.db.collection('formularios').insertOne(data);
    const formulario = await MongoClient.db.collection<Omit<Formulario, 'id'>>('formularios').findOne({ _id: insertedId });

    if (!formulario) {
      throw new Error('Erro ao criar formulário.');
    }

    return { id: formulario._id.toHexString(), ...formulario };
  }
}
