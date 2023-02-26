import { ResidenciaModel } from '../models/unidade.model';
import MongoClient from '../database/mongo.database';
import IBaseRepository from './base.repository';

interface IResidenciaRepository extends IBaseRepository<ResidenciaModel> {}

class ResidenciaMongoRepository implements IResidenciaRepository {
  async findAll(): Promise<ResidenciaModel[]> {
    const residencias: ResidenciaModel[] = await MongoClient.db.collection<ResidenciaModel>('residencias').find().toArray();

    return residencias;
  }
}

export { IResidenciaRepository, ResidenciaMongoRepository };
