import { Request, Response } from 'express';
import { UsuarioModel } from '../../models';
import { HttpResponse, HttpStatus } from '../../utils';

class GetUserController {
  public async handle(request: Request, response: Response) {
    const { id } = request.params;
    const user = await UsuarioModel.findById(id);

    return response.json(HttpResponse.create(HttpStatus.OK, user));
  }
}

export default GetUserController;
