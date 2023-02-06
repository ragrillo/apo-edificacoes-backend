import { Ambiente } from '../../models/ambiente.model';
import { MongoClient } from '../../database/mongo.database';

export interface CreateAmbienteDTO extends Omit<Ambiente, 'id'> { }

export interface ICreateAmbienteRepository {
  handle(data: CreateAmbienteDTO): Promise<Ambiente>;
}

export class CreateAmbienteRepository implements ICreateAmbienteRepository {
  async handle(data: CreateAmbienteDTO): Promise<Ambiente> {
    const { insertedId } = await MongoClient.db.collection('ambientes').insertOne(data);
    const ambiente = await MongoClient.db.collection<Omit<Ambiente, 'id'>>('ambientes').findOne({ _id: insertedId });

    if (!ambiente) {
      throw new Error('Erro ao criar ambiente.');
    }

    return { id: insertedId.toHexString(), ...ambiente };
  }
}
