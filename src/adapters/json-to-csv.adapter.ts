import { Formulario } from '../models/formulario.model';

export interface IJsonToCsvAdapter {
  handle(formulario: Formulario[]): Promise<Buffer>;
}

export class JsonToCsvAdapter implements IJsonToCsvAdapter {
  async handle(formulario: Formulario[]): Promise<Buffer> {
    let cabecalho = Object.keys(formulario[0].respostas[0]).join(',').toUpperCase().concat('\n');
    let dados = formulario.map((row) => row.respostas.map((row) => Object.values(row).join(',')).join('\n')).join('\n');

    return Buffer.from(cabecalho.concat(dados));
  }
}
