import { ObjectId } from 'mongodb';
import { EmpresaModel, EmpresaDTO } from '../models/empresa.model';
import MongoClient from '../database/mongo.database';
import IBaseRepository from './base.repository';

interface IEmpresaRepository extends IBaseRepository<EmpresaModel, EmpresaDTO> { }

class EmpresaMongoRepository implements IEmpresaRepository {
  async create(data: EmpresaDTO): Promise<void> {
    await MongoClient.db.collection<Omit<EmpresaModel, 'id'>>('empresas').insertOne(data);
  }

  async findAll(): Promise<EmpresaModel[]> {
    const empresas: EmpresaModel[] = await MongoClient.db.collection<EmpresaModel>('empresas').find().toArray();

    return empresas;
  }

  async findById(id: string): Promise<EmpresaModel> {
    const empresa: EmpresaModel | null = await MongoClient.db.collection<EmpresaModel>('empresas').findOne({ _id: new ObjectId(id) });

    if (!empresa) {
      throw new Error('Empresa não encontrada');
    }

    return empresa;
  }

  async update(id: string, data: EmpresaDTO): Promise<void> {
    await MongoClient.db.collection<EmpresaModel>('empresas').updateOne({ _id: new ObjectId(id) }, { $set: data });
  }

  async remove(id: string): Promise<void> {
    await MongoClient.db.collection<EmpresaModel>('empresas').deleteOne({ _id: new ObjectId(id) });
  }
}

export { IEmpresaRepository, EmpresaMongoRepository };
