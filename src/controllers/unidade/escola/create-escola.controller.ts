import { ICreateEscolaService } from '../../../services/unidade/escola/create-escola.service';
import { HttpRequest } from '../../../interfaces/http-request';
import { HttpResponse } from '../../../interfaces/http-response';
import { Escola } from '../../../models/unidade.model';
import { CreateEscolaDTO } from '../../../repositories/unidade/escola/create-escola.repository';
import { HttpStatusCodes } from '../../../utils/http-status-codes.utils';

export interface ICreateEscolaController {
  handle(request: HttpRequest<CreateEscolaDTO>): Promise<HttpResponse<Escola>>;
}

export class CreateEscolaController implements ICreateEscolaController {
  constructor(private readonly createEscolaService: ICreateEscolaService) { }

  async handle(request: HttpRequest<CreateEscolaDTO>): Promise<HttpResponse<Escola>> {
    try {
      if (!request.body) {
        return {
          statusCode: HttpStatusCodes.BAD_REQUEST,
          body: 'Dados inválidos',
        };
      }

      const escola = await this.createEscolaService.handle(request.body);

      return {
        statusCode: HttpStatusCodes.CREATED,
        body: escola,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        body: 'Erro interno do servidor.'
      }
    }
  }
}
