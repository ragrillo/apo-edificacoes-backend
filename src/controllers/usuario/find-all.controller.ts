import { Usuario } from '../../models/usuario.model';
import { IFindAllUsuariosService } from '../../services/usuario/find-all.service';
import { HttpResponse } from '../../interfaces/http-response';
import { HttpStatusCodes } from '../../utils/http-status-codes.utils';

export interface IFindAllUsuariosController {
  handle(): Promise<HttpResponse<Usuario[]>>;
}

export class FindAllUsuariosController implements IFindAllUsuariosController {
  constructor(
    private readonly findAllUsuariosService: IFindAllUsuariosService,
  ) { }

  async handle(): Promise<HttpResponse<Usuario[]>> {
    try {
      const usuarios = await this.findAllUsuariosService.handle();

      return {
        statusCode: HttpStatusCodes.OK,
        body: usuarios,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        body: 'Erro interno do servidor.',
      };
    }
  }
}
