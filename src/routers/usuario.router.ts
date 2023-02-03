import { Router, Request, Response } from 'express';

import { CreateUsuarioController } from '../controllers/usuario/create.controller';
import { FindAllUsuariosController } from '../controllers/usuario/find-all.controller';
import { CreateUsuarioRepository } from '../repositories/usuario/create.repository';
import { FindAllUsuariosRepository } from '../repositories/usuario/find-all.repository';
import { CreateUsuarioService } from '../services/usuario/create.service';
import { FindAllUsuariosService } from '../services/usuario/find-all.service';

const usuarioRouter = Router();

usuarioRouter.get('/', async (httpRequest: Request, httpResponse: Response) => {
  const findAllUsuariosRepository = new FindAllUsuariosRepository();
  const findAllUsuariosService = new FindAllUsuariosService(findAllUsuariosRepository);
  const findAllUsuariosController = new FindAllUsuariosController(findAllUsuariosService);

  const { statusCode, body } = await findAllUsuariosController.handle();

  httpResponse.status(statusCode).json(body);
});

usuarioRouter.post('/', async (httpRequest: Request, httpResponse: Response) => {
  const createUsuarioRepository = new CreateUsuarioRepository();
  const createUsuarioService = new CreateUsuarioService(createUsuarioRepository);
  const createUsuarioController = new CreateUsuarioController(createUsuarioService);

  const { statusCode, body } = await createUsuarioController.handle(httpRequest);

  httpResponse.status(statusCode).json(body);
});

export { usuarioRouter };

