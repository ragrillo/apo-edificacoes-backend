import { UBSModel } from '../models/unidade.model';
import MongoClient from '../database/mongo.database';
import IBaseRepository from './base.repository';

interface IUBSRepository extends IBaseRepository<UBSModel> {}

class UBSMongoRepository implements IUBSRepository {
  async findAll(): Promise<UBSModel[]> {
    const ubs: UBSModel[] = await MongoClient.db.collection<UBSModel>('ubs').find().toArray();

    return ubs;
  }
}

export { IUBSRepository, UBSMongoRepository };
