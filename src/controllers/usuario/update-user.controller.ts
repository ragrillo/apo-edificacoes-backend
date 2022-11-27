import { Request, Response } from 'express';
import { UsuarioModel } from '../../models';
import { HttpResponse, HttpStatus } from '../../utils';

class UpdateUserController {
  public async handle(request: Request, response: Response) {
    const data = request.body;
    const { id } = request.params;
    await UsuarioModel.findByIdAndUpdate(id, data);
    return response.json(HttpResponse.create(HttpStatus.OK));
  }
}

export default UpdateUserController;
