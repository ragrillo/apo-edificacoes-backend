import { HttpRequest } from '../../interfaces/http-request';
import { HttpResponse } from '../../interfaces/http-response';
import { Escola } from '../../models/unidade.model';
import { IFindUnidadesByIdService } from '../../services/unidade/find-unidades-by-id.service';
import { HttpStatusCodes } from '../../utils/http-status-codes.utils';

export interface IFindUnidadesByIdController {
  findEscolas(request: HttpRequest<string>): Promise<HttpResponse<Escola[]>>
}

export class FindUnidadesByIdController implements IFindUnidadesByIdController {
  constructor(private readonly findUnidadesByIdService: IFindUnidadesByIdService) { }

  async findEscolas(request: HttpRequest<string>): Promise<HttpResponse<Escola[]>> {
    try {
      const { id } = request.params;
      const escolas: Escola[] = await this.findUnidadesByIdService.findEscolas(id);

      return {
        statusCode: HttpStatusCodes.OK,
        body: escolas,
      }
    } catch (error) {
      return {
        statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        body: 'Erro interno do servidor.',
      }
    }
  }
}