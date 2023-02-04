import { HttpRequest } from '../../interfaces/http-request';
import { HttpResponse } from '../../interfaces/http-response';
import { Usuario } from '../../models/usuario.model';
import { UpdateUsuarioDTO } from '../../repositories/usuario/update.repository';
import { IUpdateUsuarioService } from '../../services/usuario/update.service';
import { HttpStatusCodes } from '../../utils/http-status-codes.utils';

export interface IUpdateUsuarioController {
  handle(data: HttpRequest<UpdateUsuarioDTO>): Promise<HttpResponse<Usuario>>;
}

export class UpdateUsuarioController implements IUpdateUsuarioController {
  constructor(private readonly updateUsuarioService: IUpdateUsuarioService) { }

  async handle(data: HttpRequest<UpdateUsuarioDTO>): Promise<HttpResponse<Usuario>> {
    try {
      const { id } = data.params;
      const usuario = data.body;

      if (!id) {
        return {
          statusCode: HttpStatusCodes.BAD_REQUEST,
          body: 'ID do usuário não informado.'
        };
      }

      if (!usuario) {
        return {
          statusCode: HttpStatusCodes.BAD_REQUEST,
          body: 'Dados do usuário não informados.'
        };
      }

      const usuarioAtualizado = await this.updateUsuarioService.handle(id, usuario);

      return {
        statusCode: HttpStatusCodes.OK,
        body: usuarioAtualizado,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        body: 'Erro interno do servidor.',
      };
    }
  }
}

