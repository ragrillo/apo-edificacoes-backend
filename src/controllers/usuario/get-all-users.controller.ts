import { Request, Response } from 'express';
import { UsuarioModel } from '@src/models';
import { HttpResponse, HttpStatus } from '@src/utils';

class GetAllUsersController {
  public async handle(_request: Request, response: Response) {
    const users = await UsuarioModel.find();
    return response.json(HttpResponse.create(HttpStatus.OK, users));
  }
}

export default GetAllUsersController;
