import { ResidenciaDTO, ResidenciaModel } from '../models/unidade.model';
import MongoClient from '../database/mongo.database';
import IBaseRepository from './base.repository';

interface IResidenciaRepository extends IBaseRepository<ResidenciaModel, ResidenciaDTO> {}

class ResidenciaMongoRepository implements IResidenciaRepository {
  async create(data: ResidenciaDTO): Promise<void> {
    await MongoClient.db.collection<Omit<ResidenciaModel, 'id'>>('residencias').insertOne(data);
  }

  async findAll(): Promise<ResidenciaModel[]> {
    const residencias: ResidenciaModel[] = await MongoClient.db.collection<ResidenciaModel>('residencias').find().toArray();

    return residencias;
  }
}

export { IResidenciaRepository, ResidenciaMongoRepository };
