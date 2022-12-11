import { Request, Response } from 'express';
import { UnidadeModel } from '@src/models';
import { HttpResponse, HttpStatus } from '@src/utils';

class CadastrarUnidade {
  public async handle(request: Request, response: Response) {   
    const data = request.body;
    const unidade = await UnidadeModel.create(data);
    await unidade.save();
    response.json(HttpResponse.create(HttpStatus.CREATED));
  }
}

export default CadastrarUnidade;
