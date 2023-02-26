import { IResidenciaService } from '../services/residencia.service';
import { ResidenciaModel } from '../models/unidade.model';

import { IHttpResponse, HttpStatusCode } from '../interfaces/http.interface';
import IBaseController from './base.controller';

interface IResidenciaController extends IBaseController<ResidenciaModel> {}

class ResidenciaController implements IResidenciaController {
  constructor(private readonly service: IResidenciaService) {}

  async findAll(): Promise<IHttpResponse<ResidenciaModel[]>> {
    const residencias: ResidenciaModel[] = await this.service.findAll();
    
    const httpResponse: IHttpResponse<ResidenciaModel[]> = {
      statusCode: HttpStatusCode.OK,
      body: residencias,
    };

    return httpResponse;
  }
}

export { IResidenciaController, ResidenciaController };
