import { ObjectId } from 'mongodb';
import { MongoClient } from '../../database/mongo.database';
import { Residencia } from '../../models/unidade.model';

export interface CreateResidenciaDTO extends Residencia {}

export interface ICreateResidenciaRepository {
  create(data: CreateResidenciaDTO): Promise<void>;
}

export class CreateResidenciaRepository implements ICreateResidenciaRepository {
  async create(data: CreateResidenciaDTO): Promise<void> {
    const payload: CreateResidenciaDTO = { ...data, proprietario: new ObjectId(data.proprietario) };

    await MongoClient.db.collection('residencias').insertOne(payload);
  }
}
