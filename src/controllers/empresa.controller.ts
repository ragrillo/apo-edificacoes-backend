import { IEmpresaService } from '../services/empresa.service';
import { EmpresaDTO, EmpresaModel } from '../models/empresa.model';

import { IHttpResponse, HttpStatusCode, IHttpRequest } from '../interfaces/http.interface';
import IBaseController from './base.controller';

interface IEmpresaController extends IBaseController<EmpresaModel, EmpresaDTO> { }

class EmpresaController implements IEmpresaController {
  constructor(private readonly service: IEmpresaService) { }

  async create(request: IHttpRequest<EmpresaDTO>): Promise<IHttpResponse<void>> {
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

  async findAll(): Promise<IHttpResponse<EmpresaModel[]>> {
    const empresas: EmpresaModel[] = await this.service.findAll();

    const httpResponse: IHttpResponse<EmpresaModel[]> = {
      statusCode: HttpStatusCode.OK,
      body: empresas,
    };

    return httpResponse;
  }

  async findById(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<EmpresaModel>> {
    const { id } = httpRequest.params;

    const empresa: EmpresaModel = await this.service.findById(id);

    const httpResponse: IHttpResponse<EmpresaModel> = {
      statusCode: HttpStatusCode.OK,
      body: empresa,
    };

    return httpResponse;
  }

  async update(httpRequest: IHttpRequest<EmpresaDTO>): Promise<IHttpResponse<void>> {
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

export { IEmpresaController, EmpresaController };
