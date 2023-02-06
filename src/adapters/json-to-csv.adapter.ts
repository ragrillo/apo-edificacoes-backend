import { Formulario } from '../models/formulario.model';

export interface IJsonToCsvAdapter {
  handle(formulario: Formulario[]): Promise<Buffer>;
}

export class JsonToCsvAdapter implements IJsonToCsvAdapter {
  async handle(formulario: Formulario[]): Promise<Buffer> {
    let cabecalho = Object.keys(formulario[0].respostas[0]).join(',').concat('\n');
    let dados = formulario.map((row) => row.respostas[0]);
    let corpo = dados.map((row) => Object.values(row).join(',')).join('\n');

    return Buffer.from(cabecalho.concat(corpo));
  }
}
