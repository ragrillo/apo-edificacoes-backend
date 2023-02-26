import { IUBSService } from '../services/ubs.service';
import { UBSModel } from '../models/unidade.model';

import { IHttpResponse, HttpStatusCode } from '../interfaces/http.interface';
import IBaseController from './base.controller';

interface IUBSController extends IBaseController<UBSModel> {}

class UBSController implements IUBSController {
  constructor(private readonly service: IUBSService) {}

  async findAll(): Promise<IHttpResponse<UBSModel[]>> {
    const ubs: UBSModel[] = await this.service.findAll();
    
    const httpResponse: IHttpResponse<UBSModel[]> = {
      statusCode: HttpStatusCode.OK,
      body: ubs,
    };

    return httpResponse;
  }
}

export { IUBSController, UBSController };
