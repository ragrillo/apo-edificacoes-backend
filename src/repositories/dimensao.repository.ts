import { ObjectId } from 'mongodb';
import MongoClient from '../database/mongo.database';
import { DimensaoModel, DimensaoModelDTO } from '../models/dimensao.model';

interface IDimensaoRepository {
    findAll(): Promise<DimensaoModel[]>;
    update(id: string, payload: DimensaoModelDTO): Promise<void>;
}

class DimensaoMongoRepository implements IDimensaoRepository {
    async findAll(): Promise<DimensaoModel[]> {
        const dimensoes = await MongoClient.db.collection<DimensaoModel>('dimensoes').find().toArray();
        return dimensoes;
    }

    async update(id: string, dimensao: DimensaoModelDTO): Promise<void> {
        await MongoClient.db.collection<DimensaoModel>('dimensoes').findOneAndUpdate({ _id: new ObjectId(id) }, { $set: dimensao });
    }
}

export { IDimensaoRepository, DimensaoMongoRepository };
