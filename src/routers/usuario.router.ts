import { Router, Request, Response } from 'express';

import { CreateUsuarioController } from '../controllers/usuario/create.controller';
import { CreateUsuarioRepository } from '../repositories/usuario/create.repository';
import { CreateUsuarioService } from '../services/usuario/create.service';

import { FindAllUsuariosController } from '../controllers/usuario/find-all.controller';
import { FindAllUsuariosRepository } from '../repositories/usuario/find-all.repository';
import { FindAllUsuariosService } from '../services/usuario/find-all.service';

import { FindOneUsuarioController } from '../controllers/usuario/find-one.controller';
import { FindOneUsuarioRepository } from '../repositories/usuario/find-one.repository';
import { FindOneUsuarioService } from '../services/usuario/find-one.service';

import { LoginUsuarioController } from '../controllers/usuario/login.controller';
import { LoginUsuarioService } from '../services/usuario/login.service';

import { UpdateUsuarioController } from '../controllers/usuario/update.controller';
import { UpdateUsuarioRepository } from '../repositories/usuario/update.repository';
import { UpdateUsuarioService } from '../services/usuario/update.service';

import { HashPasswordAdapter } from '../adapters/hash-password.adapter';
import { JwtTokenAdapter } from '../adapters/jwt-token.adapter';

import { SECRET_KEY } from '../utils/environment-variables.utils';

const usuarioRouter = Router();

usuarioRouter.get('/', async (request: Request, response: Response) => {
  const findAllUsuariosRepository = new FindAllUsuariosRepository();
  const findAllUsuariosService = new FindAllUsuariosService(findAllUsuariosRepository);
  const findAllUsuariosController = new FindAllUsuariosController(findAllUsuariosService);

  const httpResponse = await findAllUsuariosController.handle();

  response.status(httpResponse.statusCode).json(httpResponse);
});

usuarioRouter.get('/:id', async (request: Request, response: Response) => {
  const findOneUsuarioRepository = new FindOneUsuarioRepository();
  const findOneUsuarioService = new FindOneUsuarioService(findOneUsuarioRepository);
  const findOneUsuarioController = new FindOneUsuarioController(findOneUsuarioService);

  const httpResponse = await findOneUsuarioController.handle(request);

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
  const jwtTokenAdapter = new JwtTokenAdapter(SECRET_KEY as string);
  const hashPasswordAdapter = new HashPasswordAdapter();

  const findOneUsuarioRepository = new FindOneUsuarioRepository();
  const loginUsuarioService = new LoginUsuarioService(findOneUsuarioRepository, hashPasswordAdapter, jwtTokenAdapter);
  const loginUsuarioController = new LoginUsuarioController(loginUsuarioService);

  const httpResponse = await loginUsuarioController.handle(request);

  response.status(httpResponse.statusCode).json(httpResponse);
});

usuarioRouter.put('/:id', async (request: Request, response: Response) => {
  const updateUsuarioRepository = new UpdateUsuarioRepository();
  const updateUsuarioService = new UpdateUsuarioService(updateUsuarioRepository);
  const updateUsuarioController = new UpdateUsuarioController(updateUsuarioService);

  const httpResponse = await updateUsuarioController.handle(request);

  response.status(httpResponse.statusCode).json(httpResponse);
});

export { usuarioRouter };

