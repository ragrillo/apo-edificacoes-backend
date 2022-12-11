import { model, Schema } from 'mongoose';
import { IUnidade, IEscola, IHabitacao, IUBS, IEndereco } from '@src/interfaces';

const enderecoSchema = new Schema<IEndereco>({
  logradouro: { type: String },
  bairro: { type: String },
  cidade: { type: String },
  estado: { type: String },
  numero: { type: String },
}, { _id: false });

const escolaSchema = new Schema<IEscola>({
  quantidadeAlunos: { type: Number },
  tipoEscola: { type: String },
  modalidadeEscola: { type: String },
}, { _id: false });

const habitacaoSchema = new Schema<IHabitacao>({
  tipoUnidade: { type: String },
  anoEntregaObra: { type: Number },
  blocosExistentes: { type: Number },
  descricao: { type: String },
  nomeConstrutora: { type: String },
  numeroPavimentos: { type: Number },
  tipoCasa: [{ type: String  }],
  totalUnidades: { type: Number },
  unidadesPorBloco: { type: Number },
}, { _id: false });

const construtoraSchema = new Schema({
  nome: { type: String },
  telefone: { type: String },
  endereco: { type: enderecoSchema },
}, { _id: false });

const UBSchema = new Schema<IUBS>({
  tipoUnidade: { type: String },
  descricao: { type: String },
  dataEntregaObra: { type: String },
  construtora: { type: construtoraSchema },
}, { _id: false });

const unidadeSchema = new Schema<IUnidade>({
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
  responsavel: { type: String, required: true },
  horarioFuncionamento: [{ type: String }],
  tipoUnidade: { type: String },
  endereco: { type: enderecoSchema, required: true },
  escola: { type: escolaSchema },
  habitacao: { type: habitacaoSchema },
  ubs: { type: UBSchema },
}, { timestamps: true });

const UnidadeModel = model<IUnidade>('UnidadeModel', unidadeSchema);

export default UnidadeModel;
