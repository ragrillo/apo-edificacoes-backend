import { Request, Response } from 'express';
import { CriterioModel } from '@src/models';
import { HttpResponse, HttpStatus } from '@src/utils';

class CadastrarCriteriosController {
  async handle(_request: Request, response: Response) {
    for (let i = 1; i <= 21; i++) {
      const filename = `${__dirname}/data/criterio-${i}.json`;
      const json = require(filename);
    
      await CriterioModel.insertMany(json);
    }

    return response.json(HttpResponse.create(HttpStatus.CREATED));
  }
}

export default CadastrarCriteriosController;
