import MongoClient from '../database/mongo.database';
import { CriterioModel } from '../models/criterio.model';

interface ICriterioRepository {
  findAll(number: string): Promise<CriterioModel[]>;
}

class CriterioMongoRepository implements ICriterioRepository {
  async findAll(number: string): Promise<CriterioModel[]> {
    const query = { codigo: new RegExp(`^${number}`) };
    const criterios: CriterioModel[] = await MongoClient.db.collection<CriterioModel>('criterios').find(query).sort({ codigo: 1 }).toArray();

    return criterios;
  }
}

export { CriterioMongoRepository, ICriterioRepository };
