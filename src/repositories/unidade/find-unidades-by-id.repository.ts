import { ObjectId } from 'mongodb';
import { MongoClient } from '../../database/mongo.database';
import { Escola } from '../../models/unidade.model';

export interface IFindUnidadesByIdRepository {
  findEscolas(id: string): Promise<Escola[]>
}

export class FindUnidadesByIdMongoRepository implements IFindUnidadesByIdRepository {
  async findEscolas(id: string): Promise<Escola[]> {   
    const escolas = await MongoClient.db
      .collection<Escola>('escolas')
      .find({ proprietario: new ObjectId(id) })
      .toArray();

    return escolas;
  }
}
