import { MongoClient } from '../../../database/mongo.database';
import { Escola } from '../../../models/unidade.model';

export interface CreateEscolaDTO extends Omit<Escola, 'id'> {}

export interface ICreateEscolaRepository {
  handle(data: CreateEscolaDTO): Promise<Escola>;
}

export class CreateEscolaRepository implements ICreateEscolaRepository {
  async handle(data: CreateEscolaDTO): Promise<Escola> {
    const { insertedId } = await MongoClient.db.collection('escolas').insertOne(data);
    const escola = await MongoClient.db.collection('escolas').findOne({ _id: insertedId });

    if (!escola) {
      throw new Error('Escola não encontrada');
    }

    return { id: insertedId.toHexString(), ...data };
  }
}
