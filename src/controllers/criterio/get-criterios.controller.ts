import { Request, Response } from 'express';
import { CriterioModel } from '../../models';
import { HttpResponse, HttpStatus } from '../../utils';

class GetCriteriosController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const criterios = await CriterioModel.find();
    return response.json(HttpResponse.create(HttpStatus.OK, criterios));
  }
}

export default GetCriteriosController;
