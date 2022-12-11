import { model, Schema } from 'mongoose';
import { IUsuario } from '@src/interfaces';

const usuarioSchema = new Schema<IUsuario>({
  cargo: { type: String },
  cnpj: { type: String },
  edificacao: { type: String },
  email: { type: String },
  emailEmpresarial: { type: String },
  nomeCompleto: { type: String },
  razaoSocial: { type: String },
  senha: { type: String },
  telefone: { type: String },
  telefoneEmpresarial: { type: String },
  status: { type: String, default: 'Pendente' },
}, { timestamps: true });

const UsuarioModel = model<IUsuario>('UsuarioModel', usuarioSchema);

export default UsuarioModel;
