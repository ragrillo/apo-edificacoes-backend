import { IEscolaService } from '../services/escola.service';
import { EscolaModel } from '../models/unidade.model';

import { IHttpResponse, HttpStatusCode } from '../interfaces/http.interface';
import IBaseController from './base.controller';

interface IEscolaController extends IBaseController<EscolaModel> {}

class EscolaController implements IEscolaController {
  constructor(private readonly service: IEscolaService) {}

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
