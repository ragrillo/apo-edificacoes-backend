import { IEscolaService } from '../services/escola.service';
import { EscolaDTO, EscolaModel } from '../models/unidade.model';

import { IHttpResponse, HttpStatusCode, IHttpRequest } from '../interfaces/http.interface';
import IBaseController from './base.controller';

interface IEscolaController extends IBaseController<EscolaModel, EscolaDTO> {
  findByProprietarioId(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<EscolaModel[]>>;
}

class EscolaController implements IEscolaController {
  constructor(private readonly service: IEscolaService) {}

  async create(request: IHttpRequest<EscolaDTO>): Promise<IHttpResponse<void>> {
    const payload = request.body;

    if (!payload) {
      const httpResponse: IHttpResponse<string> = {
        statusCode: HttpStatusCode.UNPROCESSABLE_ENTITY,
        body: 'Dados inválidos',
      };

      return httpResponse;
    }

    await this.service.create(payload);

    const httpResponse: IHttpResponse<void> = {
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

  async findById(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<EscolaModel>> {
    const { id } = httpRequest.params;

    const escola: EscolaModel = await this.service.findById(id);

    const httpResponse: IHttpResponse<EscolaModel> = {
      statusCode: HttpStatusCode.OK,
      body: escola,
    };

    return httpResponse;
  }

  async findByProprietarioId(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<EscolaModel[]>> {
    const { id } = httpRequest.params;

    const escolas: EscolaModel[] = await this.service.findByProprietarioId(id);

    const httpResponse: IHttpResponse<EscolaModel[]> = {
      statusCode: HttpStatusCode.OK,
      body: escolas,
    };

    return httpResponse;
  }

  async update(httpRequest: IHttpRequest<EscolaDTO>): Promise<IHttpResponse<void>> {
    const { id } = httpRequest.params;
    const payload = httpRequest.body;

    if (!payload || !id) {
      const httpResponse: IHttpResponse<string> = {
        statusCode: HttpStatusCode.UNPROCESSABLE_ENTITY,
        body: 'Dados inválidos',
      };

      return httpResponse;
    }

    await this.service.update(id, payload);

    const httpResponse: IHttpResponse<void> = {
      statusCode: HttpStatusCode.NO_CONTENT,
    };

    return httpResponse;
  }

  async remove(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<void>> {
    const { id } = httpRequest.params;

    await this.service.remove(id);

    const httpResponse: IHttpResponse<void> = {
      statusCode: HttpStatusCode.NO_CONTENT,
    };

    return httpResponse;
  }
}

export { IEscolaController, EscolaController };
