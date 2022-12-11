import { Request, Response } from 'express';
import { CriterioModel } from '@src/models';
import { HttpResponse, HttpStatus } from '@src/utils';

class GetCriteriosController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { grupo } = request.query;
    const criterios = await CriterioModel.find({ grupo });
    return response.json(HttpResponse.create(HttpStatus.OK, criterios));
  }
}

export default GetCriteriosController;
