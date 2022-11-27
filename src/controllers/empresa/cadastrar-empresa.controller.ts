import validator from 'validator';
import { IEmpresa } from '../../interfaces';
import { EmpresaModel } from '../../models';
import { Request, Response } from 'express';
import { HttpResponse, HttpStatus } from '../../utils';

const CNPJ_REGEX = '[0-9]{2}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}';

class CadastrarEmpresa {
  public async handle(request: Request, response: Response) {
    const data = request.body as IEmpresa;
    const { nome, cnpj, telefone, email, responsavel } = data;
  
    if (!nome || !cnpj || !telefone || !email || !responsavel)
      return response.json({ sucess: false, message: 'Preencha todos os dados!' });
  
    if (!cnpj.match(CNPJ_REGEX))
      return response.json({ sucess: false, message: 'CPNJ inválido!' });
  
    if (!validator.isEmail(email))
      return response.json({ sucess: false, message: 'Email inválido!' });
  
    const empresa = await EmpresaModel.create(data);
    await empresa.save();
  
    return response.json(HttpResponse.create(HttpStatus.CREATED));
  }
}

export default CadastrarEmpresa;
