import { MongoClient } from '../../database/mongo.database';
import { Formulario } from '../../models/formulario.model';

export interface IFindaAllFormularioRepository {
  handle(numero: string): Promise<Formulario[]>;
}

export class FindAllFormularioRepository implements IFindaAllFormularioRepository {
  async handle(numero: string): Promise<Formulario[]> {
    const formularios = await MongoClient.db.collection<Omit<Formulario, 'id'>>('formularios').find({ numero }).toArray();

    return formularios.map((formulario) => ({
      ...formulario,
      id: formulario._id.toHexString(),
    }));
  }
}
