import { HttpResponse } from '../../interfaces/http-response';
import { Usuario } from '../../models/usuario.model';
import { IFindOneUsuarioService } from '../../services/usuario/find-one.service';
import { HttpStatusCodes } from '../../utils/http-status-codes.utils';

export interface IFindOneUsuarioController {
  handle(id: string): Promise<HttpResponse<Usuario>>;
}

export class FindOneUsuarioController implements IFindOneUsuarioController {
  constructor(private readonly findOneUsuarioService: IFindOneUsuarioService) {}

  async handle(id: string): Promise<HttpResponse<Usuario>> {
    try {
      const usuario = await this.findOneUsuarioService.handle(id);

      if (!usuario) {
        return {
          statusCode: HttpStatusCodes.NOT_FOUND,
          body: 'Usuário não encontrado.',
        };
      }

      return {
        statusCode: HttpStatusCodes.OK,
        body: usuario,
      };
    } catch (error: any) {
      return {
        statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        body: 'Erro interno do servidor.',
      };
    }
  }
}
