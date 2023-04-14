import { IDimensaoService } from '../services/dimensao.service';
import { HttpStatusCode, IHttpRequest, IHttpResponse } from '../interfaces/http.interface';
import { DimensaoModel, DimensaoModelDTO } from '../models/dimensao.model';

interface IDimensaoController {
    findAll(): Promise<IHttpResponse<DimensaoModel[]>>;
    update(httpRequest: IHttpRequest<DimensaoModelDTO>): Promise<IHttpResponse<void>>;
}

class DimensaoController implements IDimensaoController {
    constructor(private readonly service: IDimensaoService) {}

    async findAll(): Promise<IHttpResponse<DimensaoModel[]>> {
        const dimensoes = await this.service.findAll();

        const httpResponse: IHttpResponse<DimensaoModel[]> = {
            statusCode: HttpStatusCode.OK,
            body: dimensoes,
        };

        return httpResponse;
    }

    async update(httpRequest: IHttpRequest<DimensaoModelDTO>): Promise<IHttpResponse<void>> {
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
            body: undefined,
        };

        return httpResponse;
    }
}

export { IDimensaoController, DimensaoController };
