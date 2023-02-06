import { Router, Request, Response } from 'express';
import { JsonToCsvAdapter } from '../adapters/json-to-csv.adapter';
import { CreateFormularioController } from '../controllers/formulario/create-formulario.controller';
import { ExportFormularioController } from '../controllers/formulario/export-formulario.controller';
import { CreateFormularioRepository } from '../repositories/formulario/create-formulario.repository';
import { FindAllFormularioRepository } from '../repositories/formulario/find-all-formulario.repository';
import { CreateFormularioService } from '../services/formulario/create-formulario.service';
import { ExportFormularioService } from '../services/formulario/export-formulario.service';

const formularioRouter = Router();

formularioRouter.post('/', async (request: Request, response: Response) => {
  const createFormularioRepository = new CreateFormularioRepository();
  const createFormularioService = new CreateFormularioService(createFormularioRepository);
  const createFormularioController = new CreateFormularioController(createFormularioService);

  const { body, statusCode } = await createFormularioController.handle(request);

  return response.status(statusCode).json(body);
});

formularioRouter.get('/:number/export', async (request: Request, response: Response) => {
  const jsonToCsvAdapter = new JsonToCsvAdapter();
  const findAllFormularioRepository = new FindAllFormularioRepository();
  const exportFormularioService = new ExportFormularioService(findAllFormularioRepository, jsonToCsvAdapter);
  const exportFormularioController = new ExportFormularioController(exportFormularioService);

  const { body, statusCode } = await exportFormularioController.handle(request);
  const filename = `criterio-${request.params.number}-${Date.now()}.csv`;

  return response.status(statusCode).attachment(filename).send(body);
});

export { formularioRouter };
