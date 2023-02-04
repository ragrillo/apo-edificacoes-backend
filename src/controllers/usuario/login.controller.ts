import { HttpRequest } from '../../interfaces/http-request';
import { HttpResponse } from '../../interfaces/http-response';
import { HttpStatusCodes } from '../../utils/http-status-codes.utils';
import { ILoginUsuarioService } from '../../services/usuario/login.service';

interface LoginParams {
  email: string;
  senha: string;
}

export interface ILoginUsuarioController {
  handle: (data: HttpRequest<LoginParams>) => Promise<HttpResponse<string>>;
}

export class LoginUsuarioController implements ILoginUsuarioController {
  constructor(private readonly loginService: ILoginUsuarioService) { }

  async handle(data: HttpRequest<LoginParams>): Promise<HttpResponse<string>> {
    try {
      if (!data.body) {
        return {
          statusCode: HttpStatusCodes.BAD_REQUEST,
          body: 'Dados inválidos.',
        };
      }

      const { email, senha } = data.body;

      if (!email || !senha) {
        return {
          statusCode: HttpStatusCodes.BAD_REQUEST,
          body: 'Dados inválidos.',
        };
      }

      const token = await this.loginService.handle(email, senha);

      if (!token) {
        return {
          statusCode: HttpStatusCodes.UNAUTHORIZED,
          body: 'Email ou senha incorretos.',
        };
      }

      return {
        statusCode: HttpStatusCodes.OK,
        body: token,
      };
    } catch (error) {
      return {
        statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
        body: 'Erro interno do servidor.',
      };
    }
  }
}
