import { IFormularioService } from '../services/formulario.service';
import { FormularioDTO, FormularioModel } from '../models/formulario.model';

import { IHttpResponse, HttpStatusCode, IHttpRequest } from '../interfaces/http.interface';
import IBaseController from './base.controller';

interface IFormularioController extends IBaseController<FormularioModel, FormularioDTO> {}

class FormularioController implements IFormularioController {
  constructor(private readonly service: IFormularioService) {}

  async create(request: IHttpRequest<FormularioDTO>): Promise<IHttpResponse<string>> {
    const payload = request.body;

    if (!payload) {
      const httpResponse: IHttpResponse<string> = {
        statusCode: HttpStatusCode.UNPROCESSABLE_ENTITY,
        body: 'Dados inválidos',
      };

      return httpResponse;
    }

    await this.service.create(payload);

    const httpResponse: IHttpResponse<string> = {
      statusCode: HttpStatusCode.CREATED,
      body: 'Sua resposta foi enviada com sucesso!',
    };

    return httpResponse;
  }

  async findAll(): Promise<IHttpResponse<FormularioModel[]>> {
    const formularios: FormularioModel[] = await this.service.findAll();
    
    const httpResponse: IHttpResponse<FormularioModel[]> = {
      statusCode: HttpStatusCode.OK,
      body: formularios,
    };

    return httpResponse;
  }

  async findById(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<FormularioModel>> {
    const { id } = httpRequest.params;

    const formulario: FormularioModel = await this.service.findById(id);

    const httpResponse: IHttpResponse<FormularioModel> = {
      statusCode: HttpStatusCode.OK,
      body: formulario,
    };

    return httpResponse;
  }

  async update(httpRequest: IHttpRequest<FormularioDTO>): Promise<IHttpResponse<void>> {
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

export { IFormularioController, FormularioController };
