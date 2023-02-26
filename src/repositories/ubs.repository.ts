import { UBSDTO, UBSModel } from '../models/unidade.model';
import MongoClient from '../database/mongo.database';
import IBaseRepository from './base.repository';

interface IUBSRepository extends IBaseRepository<UBSModel, UBSDTO> {}

class UBSMongoRepository implements IUBSRepository {
  async create(data: UBSDTO): Promise<void> {
    await MongoClient.db.collection<Omit<UBSModel, 'id'>>('ubs').insertOne(data);
  }

  async findAll(): Promise<UBSModel[]> {
    const ubs: UBSModel[] = await MongoClient.db.collection<UBSModel>('ubs').find().toArray();

    return ubs;
  }
}

export { IUBSRepository, UBSMongoRepository };
