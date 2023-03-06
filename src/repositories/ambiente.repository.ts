import { ObjectId } from 'mongodb';
import { AmbienteModel, AmbienteDTO } from '../models/ambiente.model';
import MongoClient from '../database/mongo.database';
import IBaseRepository from './base.repository';

interface IAmbienteRepository extends IBaseRepository<AmbienteModel, AmbienteDTO> {
  findByUnidadeId(id: string): Promise<AmbienteModel[]>;
}

class AmbienteMongoRepository implements IAmbienteRepository {
  async create(data: AmbienteDTO): Promise<void> {
    await MongoClient.db.collection<Omit<AmbienteModel, 'id'>>('ambientes').insertOne(data);
  }

  async findAll(): Promise<AmbienteModel[]> {
    const ambientes: AmbienteModel[] = await MongoClient.db.collection<AmbienteModel>('ambientes').find().toArray();

    return ambientes;
  }

  async findByUnidadeId(id: string): Promise<AmbienteModel[]> {
    const ambientes: AmbienteModel[] = await MongoClient.db.collection<AmbienteModel>('ambientes').find({ unidade: id }).toArray();

    return ambientes;
  }

  async findById(id: string): Promise<AmbienteModel> {
    const ambiente: AmbienteModel | null = await MongoClient.db.collection<AmbienteModel>('ambientes').findOne({ _id: new ObjectId(id) });

    if (!ambiente) {
      throw new Error('Ambiente não encontrado');
    }

    return ambiente;
  }

  async update(id: string, data: AmbienteDTO): Promise<void> {
    await MongoClient.db.collection<AmbienteModel>('ambientes').updateOne({ _id: new ObjectId(id) }, { $set: data });
  }

  async remove(id: string): Promise<void> {
    await MongoClient.db.collection<AmbienteModel>('ambientes').deleteOne({ _id: new ObjectId(id) });
  }
}

export { IAmbienteRepository, AmbienteMongoRepository };
