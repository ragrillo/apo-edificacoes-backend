import { UBSDTO, UBSModel } from '../models/unidade.model';
import MongoClient from '../database/mongo.database';
import IBaseRepository from './base.repository';
import { ObjectId } from 'mongodb';

interface IUBSRepository extends IBaseRepository<UBSModel, UBSDTO> { }

class UBSMongoRepository implements IUBSRepository {
  async create(data: UBSDTO): Promise<void> {
    await MongoClient.db.collection<Omit<UBSModel, 'id'>>('ubs').insertOne(data);
  }

  async findAll(): Promise<UBSModel[]> {
    const ubs: UBSModel[] = await MongoClient.db.collection<UBSModel>('ubs').find().toArray();

    return ubs;
  }

  async findById(id: string): Promise<UBSModel> {
    const ubs: UBSModel | null = await MongoClient.db.collection<UBSModel>('ubs').findOne({ _id: new ObjectId(id) });

    if (!ubs) {
      throw new Error('UBS não encontrada');
    }

    return ubs;
  }

  async update(id: string, data: UBSDTO): Promise<void> {
    await MongoClient.db.collection<UBSModel>('ubs').updateOne({ _id: new ObjectId(id) }, { $set: data });
  }

  async remove(id: string): Promise<void> {
    await MongoClient.db.collection<UBSModel>('ubs').deleteOne({ _id: new ObjectId(id) });
  }
}

export { IUBSRepository, UBSMongoRepository };
