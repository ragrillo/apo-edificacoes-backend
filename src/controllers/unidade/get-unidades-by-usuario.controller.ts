import { UnidadeModel } from '@src/models';
import { HttpResponse, HttpStatus } from '@src/utils';
import { Request, Response } from 'express';

class GetUnidadesByUsuarioController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { usuario } = request.params;
    const unidades = await UnidadeModel.find({ usuario });
    const httpResponse = HttpResponse.create(HttpStatus.OK, unidades);

    return response.json(httpResponse);
  }
}

export default GetUnidadesByUsuarioController;
