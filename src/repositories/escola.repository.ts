import { MongoClient } from '../database/mongo.database';
import { EscolaModel } from '../models/unidade.model';
import IBaseRepository from './base.repository';

interface IEscolaRepository extends IBaseRepository<EscolaModel> {}

class EscolaMongoRepository implements IEscolaRepository {
  async findAll(): Promise<EscolaModel[]> {
    const escolas: EscolaModel[] = await MongoClient.db.collection<EscolaModel>('escolas').find().toArray();

    return escolas;
  }
}

export { IEscolaRepository, EscolaMongoRepository };
