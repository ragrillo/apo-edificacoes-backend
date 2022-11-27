import { Request, Response } from 'express';
import { UnidadeModel } from '../../models';
import { HttpResponse, HttpStatus } from '../../utils';

class CadastrarUnidade {
  public async handle(request: Request, response: Response) {   
    const data = request.body;
    const unidade = await UnidadeModel.create(data);
    await unidade.save();
    response.json(HttpResponse.create(HttpStatus.CREATED));
  }
}

export default CadastrarUnidade;
