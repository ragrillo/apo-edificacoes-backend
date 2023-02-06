import { MongoClient } from '../../../database/mongo.database';
import { UBS } from '../../../models/unidade.model';

export interface CreateUBSDTO extends Omit<UBS, 'id'> {}

export interface ICreateUBSRepository {
  handle(data: CreateUBSDTO): Promise<UBS>;
}

export class CreateUBSRepository implements ICreateUBSRepository {
  async handle(data: CreateUBSDTO): Promise<UBS> {
    const { insertedId } = await MongoClient.db.collection('ubs').insertOne(data);
    const UBS = await MongoClient.db.collection('ubs').findOne({ _id: insertedId });

    if (!UBS) {
      throw new Error('UBS não encontrada');
    }

    return { id: insertedId.toHexString(), ...data };
  }
}
