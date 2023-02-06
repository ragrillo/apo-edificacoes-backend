import { IJsonToCsvAdapter } from '../../adapters/json-to-csv.adapter';
import { IFindaAllFormularioRepository } from '../../repositories/formulario/find-all-formulario.repository';

export interface IExportFormularioService {
  handle(number: string): Promise<Buffer>;
}

export class ExportFormularioService implements IExportFormularioService {
  constructor(
    private readonly findAllFormularioRepository: IFindaAllFormularioRepository,
    private readonly jsonToCsvAdapter: IJsonToCsvAdapter,
  ) {}

  async handle(number: string): Promise<Buffer> {
    try {
      const formularios = await this.findAllFormularioRepository.handle(number);
      const buffer = await this.jsonToCsvAdapter.handle(formularios);

      return buffer;
    } catch (error) {
      throw new Error('Erro ao exportar formulário.');
    }
  }
}