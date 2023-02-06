import { Router, Request, Response } from 'express';
import { CreateFormularioController } from '../controllers/formulario/create-formulario.controller';
import { CreateFormularioRepository } from '../repositories/formulario/create-formulario.repository';
import { CreateFormularioService } from '../services/formulario/create-formulario.service';

const formularioRouter = Router();

formularioRouter.post('/', async (request: Request, response: Response) => {
  const createFormularioRepository = new CreateFormularioRepository();
  const createFormularioService = new CreateFormularioService(createFormularioRepository);
  const createFormularioController = new CreateFormularioController(createFormularioService);

  const { body, statusCode } = await createFormularioController.handle(request);

  return response.status(statusCode).json(body);
});

export { formularioRouter };
