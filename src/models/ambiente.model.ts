import { model, Schema } from 'mongoose';
import { IAmbiente } from '@src/interfaces';

const tipoAmbienteEnum = ['Coberto', 'Descoberto'];

const dimensoesSchema = new Schema({
  largura: { type: Number },
  comprimento: { type: Number },
  peDireito: { type: Number },
}, { _id: false });

const areaSchema = new Schema({
  largura: { type: Number },
  altura: { type: Number },
  instaladaNaFachada: { type: Boolean },
  areaVentilacao: { type: Number },
  areaIluminacao: { type: Number },
}, { _id: false });

const areaAberturaSchema = new Schema({
  portas: { type: Number },
  ventilacao: { type: Number },
  iluminacao: { type: Number },
}, { _id: false });

const ambienteSchema = new Schema<IAmbiente>({
  nomeAmbiente: { type: String },
  grupoAmbiente: { type: String },
  tipoAmbiente: { type: String, enum: tipoAmbienteEnum },
  dimensoes: { type: dimensoesSchema },
  areaAmbiente: { type: Number },
  janelas: [{ type: areaSchema }],
  portas: [{ type: areaSchema }],
  areaAbertura: { type: areaAberturaSchema },
  areaEsquadrias: { type: Number },
}, { timestamps: true });

const AmbienteModel = model('AmbienteModel', ambienteSchema);

export default AmbienteModel;
