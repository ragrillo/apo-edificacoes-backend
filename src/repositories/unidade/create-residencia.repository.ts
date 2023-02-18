import { MongoClient } from '../../database/mongo.database';
import { Residencia } from '../../models/unidade.model';

export interface CreateResidenciaDTO extends Residencia {}

export interface ICreateResidenciaRepository {
  create(data: CreateResidenciaDTO): Promise<void>;
}

export class CreateResidenciaRepository implements ICreateResidenciaRepository {
  async create(data: CreateResidenciaDTO): Promise<void> {
    await MongoClient.db.collection('residencias').insertOne(data);
  }
}
