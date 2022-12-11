import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

import { IUsuario } from '@src/interfaces';
import { UsuarioModel } from '@src/models';
import { HttpResponse, HttpStatus } from '@src/utils';

interface INovoUsuario extends IUsuario {
  confirmarSenha: string;
}

class CadastrarUsuarioController {
  public async handle(request: Request, response: Response) {
    const data = request.body as INovoUsuario;
    const { nomeCompleto, telefone, email, senha, confirmarSenha } = data;
    
    if ((!nomeCompleto || !telefone || !email || !senha || !confirmarSenha))
      return response.json(HttpResponse.create(HttpStatus.UNPROCESSABLE_ENTITY, 'Preencha todos os dados!'));

    if (senha !== confirmarSenha)
      return response.json(HttpResponse.create(HttpStatus.BAD_REQUEST, 'As senhas não coincidem!'));

    const userAlreadyExists = await UsuarioModel.findOne({ email });
  
    if (userAlreadyExists)
      return response.json(HttpResponse.create(HttpStatus.BAD_REQUEST, 'Usuário já cadastrado'));
  
    const saltRounds = Math.floor(Math.random() * 10);
    const hashPassword = bcrypt.hashSync(senha, saltRounds);
    data.senha = hashPassword;
  
    const newUser = await UsuarioModel.create(data);
    await newUser.save();
    
    return response.json(HttpResponse.create(HttpStatus.CREATED, 'Solicitação enviada com sucesso! Aguarde aprovação'));
  }
}

export default CadastrarUsuarioController;
