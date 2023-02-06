import { HttpRequest } from '../../interfaces/http-request';
import { HttpResponse } from '../../interfaces/http-response';
import { IExportFormularioService } from '../../services/formulario/export-formulario.service';
import { HttpStatusCodes } from '../../utils/http-status-codes.utils';

interface ExportFormularioParams {
  number: string;
}

export interface IExportFormularioController {
  handle(httpRequest: HttpRequest<ExportFormularioParams>): Promise<HttpResponse<Buffer>>;
}

export class ExportFormularioController implements IExportFormularioController {
  constructor(
    private readonly exportFormularioService: IExportFormularioService,
  ) { }

  async handle(httpRequest: HttpRequest<ExportFormularioParams>): Promise<HttpResponse<Buffer>> {
    try {
      const { number } = httpRequest.params;
      const data = await this.exportFormularioService.handle(number);

      return {
        statusCode: HttpStatusCodes.OK,
        body: data,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        body: 'Erro ao exportar formulário.',
      }
    }
  }
}
