import { IAmbienteService } from '../services/ambiente.service';
import { AmbienteDTO, AmbienteModel } from '../models/ambiente.model';

import { IHttpResponse, HttpStatusCode, IHttpRequest } from '../interfaces/http.interface';
import IBaseController from './base.controller';

interface IAmbienteController extends IBaseController<AmbienteModel, AmbienteDTO> {
  findByUnidadeId(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<AmbienteModel[]>>;
}

class AmbienteController implements IAmbienteController {
  constructor(private readonly service: IAmbienteService) { }

  async create(request: IHttpRequest<AmbienteDTO>): Promise<IHttpResponse<void>> {
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

  async findAll(): Promise<IHttpResponse<AmbienteModel[]>> {
    const ambientes: AmbienteModel[] = await this.service.findAll();

    const httpResponse: IHttpResponse<AmbienteModel[]> = {
      statusCode: HttpStatusCode.OK,
      body: ambientes,
    };

    return httpResponse;
  }

  async findByUnidadeId(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<AmbienteModel[]>> {
    const { id } = httpRequest.params;

    const ambientes: AmbienteModel[] = await this.service.findByUnidadeId(id);

    const httpResponse: IHttpResponse<AmbienteModel[]> = {
      statusCode: HttpStatusCode.OK,
      body: ambientes,
    };

    return httpResponse;
  }

  async findById(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<AmbienteModel>> {
    const { id } = httpRequest.params;

    const ambiente: AmbienteModel = await this.service.findById(id);

    const httpResponse: IHttpResponse<AmbienteModel> = {
      statusCode: HttpStatusCode.OK,
      body: ambiente,
    };

    return httpResponse;
  }

  async update(httpRequest: IHttpRequest<AmbienteDTO>): Promise<IHttpResponse<void>> {
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

export { IAmbienteController, AmbienteController };
