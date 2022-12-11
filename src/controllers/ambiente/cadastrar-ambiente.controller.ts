import { Request, Response } from 'express';
import { AmbienteModel } from '@src/models';
import { HttpResponse, HttpStatus } from '@src/utils';

class CadastrarAmbiente {
  public async handle(request: Request, response: Response) {
    const data = request.body;
    const { largura, comprimento } = data.dimensoes;
    data.areaAmbiente = largura * comprimento;

    const ambiente = await AmbienteModel.create(data);
    await ambiente.save();

    return response.json(HttpResponse.create(HttpStatus.CREATED));
  }
}

export default CadastrarAmbiente;
