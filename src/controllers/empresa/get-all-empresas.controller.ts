import { Request, Response } from 'express';
import { EmpresaModel } from '@src/models';
import { HttpResponse, HttpStatus } from '@src/utils';

class GetAllEmpresas {
  public async handle(_request: Request, response: Response) {
    const empresas = await EmpresaModel.find();
    return response.json(HttpResponse.create(HttpStatus.OK, empresas));
  }
}

export default GetAllEmpresas;
