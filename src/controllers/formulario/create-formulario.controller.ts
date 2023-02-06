import { HttpRequest } from '../../interfaces/http-request';
import { HttpResponse } from '../../interfaces/http-response';
import { Formulario } from '../../models/formulario.model';
import { CreateFormularioDTO } from '../../repositories/formulario/create-formulario.repository';
import { ICreateFormularioService } from '../../services/formulario/create-formulario.service';
import { HttpStatusCodes } from '../../utils/http-status-codes.utils';

export interface ICreateFormularioController {
  handle(data: HttpRequest<CreateFormularioDTO>): Promise<HttpResponse<Formulario>>;
}

export class CreateFormularioController implements ICreateFormularioController {
  constructor(private createFormularioService: ICreateFormularioService) {}

  async handle(data: HttpRequest<CreateFormularioDTO>): Promise<HttpResponse<Formulario>> {
    try {
      if (!data.body) {
        return {
          statusCode: HttpStatusCodes.BAD_REQUEST,
          body: 'Dados inválidos.',
        };
      }
  
      const formulario = await this.createFormularioService.handle(data.body);
  
      return {
        statusCode: HttpStatusCodes.CREATED,
        body: formulario,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        body: 'Erro interno do servidor.',
      }
    }
  }
}
