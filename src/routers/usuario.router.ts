import { Router, Request, Response } from 'express';

import { CreateUsuarioController } from '../controllers/usuario/create.controller';
import { FindAllUsuariosController } from '../controllers/usuario/find-all.controller';
import { CreateUsuarioRepository } from '../repositories/usuario/create.repository';
import { FindAllUsuariosRepository } from '../repositories/usuario/find-all.repository';
import { CreateUsuarioService } from '../services/usuario/create.service';
import { FindAllUsuariosService } from '../services/usuario/find-all.service';

const usuarioRouter = Router();

usuarioRouter.get('/', async (request: Request, response: Response) => {
  const findAllUsuariosRepository = new FindAllUsuariosRepository();
  const findAllUsuariosService = new FindAllUsuariosService(findAllUsuariosRepository);
  const findAllUsuariosController = new FindAllUsuariosController(findAllUsuariosService);

  const httpResponse = await findAllUsuariosController.handle();

  response.status(httpResponse.statusCode).json(httpResponse);
});

usuarioRouter.post('/', async (request: Request, response: Response) => {
  const createUsuarioRepository = new CreateUsuarioRepository();
  const createUsuarioService = new CreateUsuarioService(createUsuarioRepository);
  const createUsuarioController = new CreateUsuarioController(createUsuarioService);

  const httpResponse = await createUsuarioController.handle(request);

  response.status(httpResponse.statusCode).json(httpResponse);
});

export { usuarioRouter };

