import { HttpStatusCodes } from '../../utils/http-status-codes.utils';
import { HttpRequest } from '../../interfaces/http-request';
import { HttpResponse } from '../../interfaces/http-response';
import { CreateResidenciaDTO } from '../../repositories/unidade/create-residencia.repository';
import { ICreateResidenciaService } from '../../services/unidade/create-residencia.service';

export interface ICreateResidenciaController {
  create(request: HttpRequest<CreateResidenciaDTO>): Promise<HttpResponse<void>>;
}

export class CreateResidenciaController implements ICreateResidenciaController {
  constructor(private readonly createResidenciaService: ICreateResidenciaService) {}

  async create(request: HttpRequest<CreateResidenciaDTO>): Promise<HttpResponse<void>> {
    try {
      if (!request.body) {
        return {
          statusCode: HttpStatusCodes.BAD_REQUEST,
          body: 'Missing body',
        };
      }

      await this.createResidenciaService.create(request.body);

      return {
        statusCode: HttpStatusCodes.CREATED,
        body: 'Unidade cadastrada com sucesso',
      };
    }
    catch (error) {
      return {
        statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        body: 'Erro interno do servidor',
      };
    }
  }
}
