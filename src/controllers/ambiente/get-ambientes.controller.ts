import { Request, Response } from 'express';
import { AmbienteModel } from '../../models';
import { HttpResponse, HttpStatus } from '../../utils';

class GetAmbientesController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const ambientes = await AmbienteModel.find();
    return response.json(HttpResponse.create(HttpStatus.OK, ambientes));
  }
}

export default GetAmbientesController;
