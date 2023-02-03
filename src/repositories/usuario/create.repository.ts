import { MongoClient } from '../../database/mongo.database';
import { Usuario } from '../../models/usuario.model';

export interface CreateUsuarioParams {
  cargo: string;
  edificacao: string;
  nomeCompleto: string;
  telefone: string;
  email: string;
  senha: string;
  cnpj?: string;
  razaoSocial?: string;
  emailEmpresarial?: string;
  telefoneEmpresarial?: string;
}

export interface ICreateUsuarioRepository {
  handle(data: CreateUsuarioParams): Promise<Usuario>;
}

export class CreateUsuarioRepository implements ICreateUsuarioRepository {
  async handle(data: CreateUsuarioParams): Promise<Usuario> {
    const { insertedId } = await MongoClient.db.collection('usuarios').insertOne({ ...data, status: 'Pendente' });
    const usuario = await MongoClient.db.collection<Omit<Usuario, 'id'>>('usuarios').findOne({ _id: insertedId });

    if (!usuario) {
      throw new Error('Erro ao criar usuário.');
    }

    return { id: usuario._id.toHexString(), ...usuario };
  }
}
