import { model, Schema } from 'mongoose';
import { ICriterio } from '@src/interfaces';

const criterioSchema = new Schema<ICriterio>({
  titulo: { type: String },
  subtitulo: { type: String },
  endpoint: { type: String },
  grupo: { type: String },
  respondido: { type: Boolean, default: false },
});

const CriterioModel = model('CriterioModel', criterioSchema);

export default CriterioModel;
