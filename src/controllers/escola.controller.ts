import { IEscolaService } from '../services/escola.service';
import { EscolaDTO, EscolaModel } from '../models/unidade.model';

import { IHttpResponse, HttpStatusCode, IHttpRequest } from '../interfaces/http.interface';
import IBaseController from './base.controller';

interface IEscolaController extends IBaseController<EscolaModel, EscolaDTO> {}

class EscolaController implements IEscolaController {
  constructor(private readonly service: IEscolaService) {}

  async create(request: IHttpRequest<EscolaDTO>): Promise<IHttpResponse<EscolaModel>> {
    const payload = request.body;

    if (!payload) {
      const httpResponse: IHttpResponse<EscolaModel> = {
        statusCode: HttpStatusCode.UNPROCESSABLE_ENTITY,
        body: 'Dados inválidos',
      };

      return httpResponse;
    }

    await this.service.create(payload);

    const httpResponse: IHttpResponse<EscolaModel> = {
      statusCode: HttpStatusCode.CREATED,
    };

    return httpResponse;
  }

  async findAll(): Promise<IHttpResponse<EscolaModel[]>> {
    const escolas: EscolaModel[] = await this.service.findAll();
    
    const httpResponse: IHttpResponse<EscolaModel[]> = {
      statusCode: HttpStatusCode.OK,
      body: escolas,
    };

    return httpResponse;
  }
}

export { IEscolaController, EscolaController };
