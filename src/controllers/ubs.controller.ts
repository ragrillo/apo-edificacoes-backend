import { IUBSService } from '../services/ubs.service';
import { UBSDTO, UBSModel } from '../models/unidade.model';

import { IHttpResponse, HttpStatusCode, IHttpRequest } from '../interfaces/http.interface';
import IBaseController from './base.controller';

interface IUBSController extends IBaseController<UBSModel, UBSDTO> {}

class UBSController implements IUBSController {
  constructor(private readonly service: IUBSService) {}

  async create(request: IHttpRequest<UBSDTO>): Promise<IHttpResponse<void>> {
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

  async findAll(): Promise<IHttpResponse<UBSModel[]>> {
    const ubs: UBSModel[] = await this.service.findAll();
    
    const httpResponse: IHttpResponse<UBSModel[]> = {
      statusCode: HttpStatusCode.OK,
      body: ubs,
    };

    return httpResponse;
  }

  async findById(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<UBSModel>> {
    const { id } = httpRequest.params;

    const ubs: UBSModel = await this.service.findById(id);

    const httpResponse: IHttpResponse<UBSModel> = {
      statusCode: HttpStatusCode.OK,
      body: ubs,
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

export { IUBSController, UBSController };
