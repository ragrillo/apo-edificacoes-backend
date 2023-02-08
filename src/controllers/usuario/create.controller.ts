import { HttpRequest } from '../../interfaces/http-request';
import { HttpResponse } from '../../interfaces/http-response';
import { CreateUsuarioParams } from '../../repositories/usuario/create.repository';
import { ICreateUsuarioService } from '../../services/usuario/create.service';
import { HttpStatusCodes } from '../../utils/http-status-codes.utils';

export interface ICreateUsuarioController {
  handle(data: HttpRequest<CreateUsuarioParams>): Promise<HttpResponse<string>>;
}

export class CreateUsuarioController implements ICreateUsuarioController {
  constructor(private readonly createUsuarioService: ICreateUsuarioService) { }

  async handle(data: HttpRequest<CreateUsuarioParams>): Promise<HttpResponse<string>> {
    try {
      if (!data.body) {
        return {
          statusCode: HttpStatusCodes.BAD_REQUEST,
          body: 'Dados inválidos.',
        };
      }

      await this.createUsuarioService.handle(data.body);

      return {
        statusCode: HttpStatusCodes.CREATED,
        body: 'Cadastro realizado com sucesso! Aguarde a aprovação do administrador.',
      };
    } catch (error) {
      console.error(error);
      
      return {
        statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        body: 'Erro interno do servidor.',
      };
    }
  }
}
