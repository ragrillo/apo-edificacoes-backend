import { model, Schema } from 'mongoose';
import { ICriterio, ISubcriterio } from '../interfaces';

const subcriterioSchema = new Schema<ISubcriterio>({
  nome: { type: String },
  link: { type: String },
  respondido: { type: Boolean, default: false },
}, { _id: false });

const criterioSchema = new Schema<ICriterio>({
  nome: { type: String },
  subcriterio: [{ type: subcriterioSchema }],
});

const CriterioModel = model('CriterioModel', criterioSchema);

export default CriterioModel;
