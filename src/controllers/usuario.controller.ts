import { IUsuarioService, TokenPayload } from '../services/usuario.service';
import { UsuarioDTO, UsuarioModel } from '../models/usuario.model';

import { IHttpResponse, HttpStatusCode, IHttpRequest } from '../interfaces/http.interface';
import IBaseController from './base.controller';

type LoginHttpRequest = {
  email: string;
  senha: string;
}

type LoginHttpResponse = {
  token: string;
  usuario: TokenPayload;
}

interface IUsuarioController extends IBaseController<UsuarioModel, UsuarioDTO> {
  login(httpRequest: IHttpRequest<LoginHttpRequest>): Promise<IHttpResponse<LoginHttpResponse | string>>;
}

class UsuarioController implements IUsuarioController {
  constructor(private readonly service: IUsuarioService) { }

  async create(request: IHttpRequest<UsuarioDTO>): Promise<IHttpResponse<string>> {
    const payload = request.body;

    if (!payload) {
      const httpResponse: IHttpResponse<string> = {
        statusCode: HttpStatusCode.UNPROCESSABLE_ENTITY,
        body: 'Dados inválidos',
      };

      return httpResponse;
    }

    await this.service.create(payload);

    const httpResponse: IHttpResponse<string> = {
      statusCode: HttpStatusCode.CREATED,
      body: 'Seu cadastro foi concluído com sucesso! Aguarde a aprovação do administrador',
    };

    return httpResponse;
  }

  async findAll(): Promise<IHttpResponse<UsuarioModel[]>> {
    const usuarios: UsuarioModel[] = await this.service.findAll();

    const httpResponse: IHttpResponse<UsuarioModel[]> = {
      statusCode: HttpStatusCode.OK,
      body: usuarios,
    };

    return httpResponse;
  }

  async findById(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<UsuarioModel>> {
    const { id } = httpRequest.params;

    const usuario: UsuarioModel = await this.service.findById(id);

    const httpResponse: IHttpResponse<UsuarioModel> = {
      statusCode: HttpStatusCode.OK,
      body: usuario,
    };

    return httpResponse;
  }

  async update(httpRequest: IHttpRequest<UsuarioDTO>): Promise<IHttpResponse<void>> {
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
    };

    return httpResponse;
  }

  async remove(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<void>> {
    const { id } = httpRequest.params;

    await this.service.remove(id);

    const httpResponse: IHttpResponse<void> = {
      statusCode: HttpStatusCode.NO_CONTENT,
    };

    return httpResponse;
  }

  async login(httpRequest: IHttpRequest<LoginHttpRequest>): Promise<IHttpResponse<LoginHttpResponse | string>> {
    if (!httpRequest.body) {
      const httpResponse: IHttpResponse<string> = {
        statusCode: HttpStatusCode.UNPROCESSABLE_ENTITY,
        body: 'Dados inválidos',
      };

      return httpResponse;
    }

    const { email, senha } = httpRequest.body;

    if (!email || !senha) {
      const httpResponse: IHttpResponse<string> = {
        statusCode: HttpStatusCode.UNPROCESSABLE_ENTITY,
        body: 'Dados inválidos',
      };

      return httpResponse;
    }

    try {
      const token: string = await this.service.login(email, senha);

      const { id, cargo, edificacao } = await this.service.findByEmail(email);

      const httpResponseBody: LoginHttpResponse = {
        token,
        usuario: { id, cargo, edificacao },
      };

      const httpResponse: IHttpResponse<LoginHttpResponse> = {
        statusCode: HttpStatusCode.OK,
        body: httpResponseBody,
      };

      return httpResponse;
    } catch (error: any) {
      const httpResponse: IHttpResponse<string> = {
        statusCode: HttpStatusCode.UNAUTHORIZED,
        body: error.message,
      };

      return httpResponse;
    }
  }
}

export { IUsuarioController, UsuarioController };
