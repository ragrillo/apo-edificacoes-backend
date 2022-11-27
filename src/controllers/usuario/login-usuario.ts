import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { UsuarioModel } from '../../models';
import { HttpResponse, HttpStatus } from '../../utils';

class LoginUsuarioController {
  public async handle(request: Request, response: Response) {
    const { email } = request.body;
    const user = await UsuarioModel.findOne({ email });

    if (!user)
      return response.json(HttpResponse.create(HttpStatus.NOT_FOUND, 'Usuário não encontrado!'));

    if (user.status === 'Pendente')
      return response.json(HttpResponse.create(HttpStatus.UNAUTHORIZED, 'Seu cadastro está em análise, aguarde a aprovação!'));
 
    const payload = {
      id: user._id,
      cargo: user.cargo,
      status: user.status,
      edificacao: user.edificacao,
    }; 

    const token = jwt.sign(payload, String(process.env.SECRET_KEY));
  
    return response.json(HttpResponse.create(HttpStatus.OK, token));
  }  
}

export default LoginUsuarioController;
