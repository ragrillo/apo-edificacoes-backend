import { HttpRequest } from '../../../interfaces/http-request';
import { HttpResponse } from '../../../interfaces/http-response';
import { Residencia } from '../../../models/unidade.model';
import { ICreateResidenciaDTO,  } from '../../../repositories/unidade/residencia/create-residencia.repository';
import { ICreateResidenciaService } from '../../../services/unidade/residencia/create-residencia.service';
import { HttpStatusCodes } from '../../../utils/http-status-codes.utils';

export interface ICreateResidenciaController {
  handle(request: HttpRequest<ICreateResidenciaDTO>): Promise<HttpResponse<Residencia>>;
}

export class CreateResidenciaController implements ICreateResidenciaController {
  constructor(
    private readonly createResidenciaService: ICreateResidenciaService,
  ) {}

  async handle(request: HttpRequest<ICreateResidenciaDTO>): Promise<HttpResponse<Residencia>> {
    try {
      if (!request.body) {
        return {
          statusCode: HttpStatusCodes.BAD_REQUEST,
          body: 'Dados inválidos.',
        };
      }
  
      const residencia = await this.createResidenciaService.handle(request.body);
  
      return {
        statusCode: HttpStatusCodes.CREATED,
        body: residencia,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        body: 'Erro interno do servidor.',
      }
    }
  }
}
