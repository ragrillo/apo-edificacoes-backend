import { ICreateUBSService } from '../../../services/unidade/ubs/create-ubs.service';
import { HttpRequest } from '../../../interfaces/http-request';
import { HttpResponse } from '../../../interfaces/http-response';
import { UBS } from '../../../models/unidade.model';
import { CreateUBSDTO } from '../../../repositories/unidade/ubs/create-ubs.repository';
import { HttpStatusCodes } from '../../../utils/http-status-codes.utils';

export interface ICreateUBSController {
  handle(request: HttpRequest<CreateUBSDTO>): Promise<HttpResponse<UBS>>;
}

export class CreateUBSController implements ICreateUBSController {
  constructor(private readonly createUBSService: ICreateUBSService) { }

  async handle(request: HttpRequest<CreateUBSDTO>): Promise<HttpResponse<UBS>> {
    try {
      if (!request.body) {
        return {
          statusCode: HttpStatusCodes.BAD_REQUEST,
          body: 'Dados inválidos',
        };
      }

      const UBS = await this.createUBSService.handle(request.body);

      return {
        statusCode: HttpStatusCodes.CREATED,
        body: UBS,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        body: 'Erro interno do servidor.'
      }
    }
  }
}
