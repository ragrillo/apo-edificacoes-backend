import { Router, Request, Response } from 'express';

import { HashPasswordAdapter } from '../adapters/hash-password.adapter';
import { CreateUsuarioController } from '../controllers/usuario/create.controller';
import { FindAllUsuariosController } from '../controllers/usuario/find-all.controller';
import { FindOneUsuarioController } from '../controllers/usuario/find-one.controller';
import { CreateUsuarioRepository } from '../repositories/usuario/create.repository';
import { FindAllUsuariosRepository } from '../repositories/usuario/find-all.repository';
import { FindOneUsuarioRepository } from '../repositories/usuario/find-one.repository';
import { CreateUsuarioService } from '../services/usuario/create.service';
import { FindAllUsuariosService } from '../services/usuario/find-all.service';
import { FindOneUsuarioService } from '../services/usuario/find-one.service';
import { LoginUsuarioService } from '../services/usuario/login.service';
import { LoginUsuarioController } from '../controllers/usuario/login.controller';

const usuarioRouter = Router();

usuarioRouter.get('/', async (request: Request, response: Response) => {
  const findAllUsuariosRepository = new FindAllUsuariosRepository();
  const findAllUsuariosService = new FindAllUsuariosService(findAllUsuariosRepository);
  const findAllUsuariosController = new FindAllUsuariosController(findAllUsuariosService);

  const httpResponse = await findAllUsuariosController.handle();

  response.status(httpResponse.statusCode).json(httpResponse);
});

usuarioRouter.get('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;

  const findOneUsuarioRepository = new FindOneUsuarioRepository();
  const findOneUsuarioService = new FindOneUsuarioService(findOneUsuarioRepository);
  const findOneUsuarioController = new FindOneUsuarioController(findOneUsuarioService);

  const httpResponse = await findOneUsuarioController.handle(id);

  response.status(httpResponse.statusCode).json(httpResponse);
});

usuarioRouter.post('/', async (request: Request, response: Response) => {
  const createUsuarioRepository = new CreateUsuarioRepository();
  const hashPasswordAdapter = new HashPasswordAdapter();
  const createUsuarioService = new CreateUsuarioService(createUsuarioRepository, hashPasswordAdapter);
  const createUsuarioController = new CreateUsuarioController(createUsuarioService);

  const httpResponse = await createUsuarioController.handle(request);

  response.status(httpResponse.statusCode).json(httpResponse);
});

usuarioRouter.post('/login', async (request: Request, response: Response) => {
  const findOneUsuarioRepository = new FindOneUsuarioRepository();
  const loginUsuarioService = new LoginUsuarioService(findOneUsuarioRepository);
  const loginUsuarioController = new LoginUsuarioController(loginUsuarioService);

  const httpResponse = await loginUsuarioController.handle(request);

  response.status(httpResponse.statusCode).json(httpResponse);
});

export { usuarioRouter };

