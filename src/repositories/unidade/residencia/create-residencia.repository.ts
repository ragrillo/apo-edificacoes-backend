import { ObjectId } from 'mongodb';
import { MongoClient } from '../../../database/mongo.database';
import { Residencia } from '../../../models/unidade.model';

export interface ICreateResidenciaDTO extends Partial<Residencia> {}

export interface ICreateResidenciaRepository {
  handle(data: ICreateResidenciaDTO): Promise<Residencia>;
}

export class CreateResidenciaRepository implements ICreateResidenciaRepository {
  async handle(data: ICreateResidenciaDTO): Promise<Residencia> {
    const payload: ICreateResidenciaDTO = { ...data, proprietario: new ObjectId(data.proprietario) };

    const { insertedId } = await MongoClient.db.collection('residencias').insertOne(payload);

    const residencia = await MongoClient.db.collection<Omit<Residencia, 'id'>>('residencias').findOne({ _id: insertedId });

    if (!residencia) {
      throw new Error('Erro ao criar residência.');
    }

    return { ...residencia, id: insertedId.toHexString() };
  }
}

