import { ObjectId } from 'mongodb';
import { EscolaDTO, EscolaModel } from '../models/unidade.model';
import MongoClient from '../database/mongo.database';
import IBaseRepository from './base.repository';

interface IEscolaRepository extends IBaseRepository<EscolaModel, EscolaDTO> {
  findByProprietarioId(id: string): Promise<EscolaModel[]>;
}

class EscolaMongoRepository implements IEscolaRepository {
  async create(data: EscolaDTO): Promise<void> {
    await MongoClient.db.collection<Omit<EscolaModel, 'id'>>('escolas').insertOne(data);
  }

  async findAll(): Promise<EscolaModel[]> {
    const escolas: EscolaModel[] = await MongoClient.db.collection<EscolaModel>('escolas').find().toArray();

    return escolas;
  }

  async findById(id: string): Promise<EscolaModel> {
    const escola: EscolaModel | null = await MongoClient.db.collection<EscolaModel>('escolas').findOne({ _id: new ObjectId(id) });

    if (!escola) {
      throw new Error('Escola não encontrada');
    }

    return escola;
  }

  async findByProprietarioId(id: string): Promise<EscolaModel[]> {
    const escolas: EscolaModel[] = await MongoClient.db.collection<EscolaModel>('escolas').find({ proprietario: id }).toArray();

    return escolas;
  }

  async update(id: string, data: EscolaDTO): Promise<void> {
    await MongoClient.db.collection<EscolaModel>('escolas').updateOne({ _id: new ObjectId(id) }, { $set: data });
  }

  async remove(id: string): Promise<void> {
    await MongoClient.db.collection<EscolaModel>('escolas').deleteOne({ _id: new ObjectId(id) });
  }
}

export { EscolaDTO, IEscolaRepository, EscolaMongoRepository };
