import { IResidenciaService } from '../services/residencia.service';
import { ResidenciaDTO, ResidenciaModel } from '../models/unidade.model';

import { IHttpResponse, HttpStatusCode, IHttpRequest } from '../interfaces/http.interface';
import IBaseController from './base.controller';

interface IResidenciaController extends IBaseController<ResidenciaModel, ResidenciaDTO> {}

class ResidenciaController implements IResidenciaController {
  constructor(private readonly service: IResidenciaService) {}

  async create(request: IHttpRequest<ResidenciaDTO>): Promise<IHttpResponse<void>> {
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

  async findAll(): Promise<IHttpResponse<ResidenciaModel[]>> {
    const residencias: ResidenciaModel[] = await this.service.findAll();
    
    const httpResponse: IHttpResponse<ResidenciaModel[]> = {
      statusCode: HttpStatusCode.OK,
      body: residencias,
    };

    return httpResponse;
  }

  async findById(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<ResidenciaModel>> {
    const { id } = httpRequest.params;

    const residencia: ResidenciaModel = await this.service.findById(id);

    const httpResponse: IHttpResponse<ResidenciaModel> = {
      statusCode: HttpStatusCode.OK,
      body: residencia,
    };

    return httpResponse;
  }

  async update(httpRequest: IHttpRequest<ResidenciaDTO>): Promise<IHttpResponse<void>> {
    const { id } = httpRequest.params;
    const payload = httpRequest.body;

    if (!payload) {
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

export { IResidenciaController, ResidenciaController };
