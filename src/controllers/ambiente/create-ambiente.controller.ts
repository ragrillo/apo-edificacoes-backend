import { HttpStatusCodes } from '../../utils/http-status-codes.utils';
import { HttpRequest } from '../../interfaces/http-request';
import { HttpResponse } from '../../interfaces/http-response';
import { Ambiente } from '../../models/ambiente.model';
import { CreateAmbienteDTO } from '../../repositories/ambiente/create-ambiente.repository';
import { ICreateAmbienteService } from '../../services/ambiente/create-ambiente.service';

export interface ICreateAmbienteController {
  handle(request: HttpRequest<CreateAmbienteDTO>): Promise<HttpResponse<Ambiente>>
}

export class CreateAmbienteController implements ICreateAmbienteController {
  constructor(
    private createAmbienteService: ICreateAmbienteService,
  ) { }

  async handle(request: HttpRequest<CreateAmbienteDTO>): Promise<HttpResponse<Ambiente>> {
    try {
      if (!request.body) {
        return {
          statusCode: HttpStatusCodes.BAD_REQUEST,
          body: 'Dados inválidos.',
        };
      }

      const ambiente = await this.createAmbienteService.handle(request.body);

      return {
        statusCode: HttpStatusCodes.CREATED,
        body: ambiente,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        body: 'Erro interno do servidor.',
      };
    }
  }
}
