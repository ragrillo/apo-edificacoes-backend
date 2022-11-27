import { model, Schema } from 'mongoose';
import { IEmpresa } from '../interfaces';

const empresaSchema = new Schema<IEmpresa>({
  nome: { type: String },
  responsavel: { type: String },
  cnpj: { type: String },
  telefone: { type: String },
  email: { type: String },
  edificacoes: { type: String },
}, { timestamps: true });

const EmpresaModel = model('EmpresaModel', empresaSchema);

export default EmpresaModel;
