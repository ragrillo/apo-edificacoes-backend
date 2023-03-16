import { HttpStatusCode, IHttpRequest, IHttpResponse } from '../interfaces/http.interface';
import { CriterioModel } from '../models/criterio.model';
import { ICriterioService } from '../services/criterio.service';

interface ICriterioController {
  findAll(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<CriterioModel[]>>;
}

class CriterioController implements ICriterioController {
  constructor(private readonly criterioService: ICriterioService) {}

  async findAll(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<CriterioModel[]>> {
    const { number } = httpRequest.params;
    const criterios = await this.criterioService.findAll(number);

    const httpResponse: IHttpResponse<CriterioModel[]> = {
      statusCode: HttpStatusCode.OK,
      body: criterios,
    };

    return httpResponse;
  }
}

export { CriterioController, ICriterioController };
