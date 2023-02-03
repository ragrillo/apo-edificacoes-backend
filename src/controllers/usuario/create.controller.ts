import { HttpRequest } from '../../interfaces/http-request';
import { HttpResponse } from '../../interfaces/http-response';
import { Usuario } from '../../models/usuario.model';
import { CreateUsuarioParams } from '../../repositories/usuario/create.repository';
import { ICreateUsuarioService } from '../../services/usuario/create.service';
import { HttpStatusCodes } from '../../utils/http-status-codes.utils';

export interface ICreateUsuarioController {
  handle(data: HttpRequest<CreateUsuarioParams>): Promise<HttpResponse<Usuario>>;
}

export class CreateUsuarioController implements ICreateUsuarioController {
  constructor(private readonly createUsuarioService: ICreateUsuarioService) { }

  async handle(data: HttpRequest<CreateUsuarioParams>): Promise<HttpResponse<Usuario>> {
    try {
      if (!data.body) {
        return {
          statusCode: HttpStatusCodes.BAD_REQUEST,
          body: 'Dados inválidos.',
        };
      }

      const usuario = await this.createUsuarioService.handle(data.body);

      return {
        statusCode: HttpStatusCodes.CREATED,
        body: usuario,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        body: 'Erro interno do servidor.',
      };
    }
  }
}
