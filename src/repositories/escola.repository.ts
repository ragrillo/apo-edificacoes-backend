import { ObjectId } from 'mongodb';
import { EscolaDTO, EscolaModel } from '../models/unidade.model';
import MongoClient from '../database/mongo.database';
import IBaseRepository from './base.repository';

interface IEscolaRepository extends IBaseRepository<EscolaModel, EscolaDTO> { }

class EscolaMongoRepository implements IEscolaRepository {
  async create(data: EscolaDTO): Promise<void> {
    const payload: EscolaDTO = { ...data, proprietario: new ObjectId(data.proprietario) };
    await MongoClient.db.collection<Omit<EscolaModel, 'id'>>('escolas').insertOne(payload);
  }

  async findAll(): Promise<EscolaModel[]> {
    const escolas: EscolaModel[] = await MongoClient.db.collection<EscolaModel>('escolas').find().toArray();

    return escolas;
  }
}

export { EscolaDTO, IEscolaRepository, EscolaMongoRepository };
