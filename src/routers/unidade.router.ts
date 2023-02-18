import { Request, Response, Router } from 'express';
import { CreateResidenciaController } from '../controllers/unidade/create-residencia.controller';
import { CreateResidenciaRepository } from '../repositories/unidade/create-residencia.repository';
import { CreateResidenciaService } from '../services/unidade/create-residencia.service';

const unidadeRouter = Router();

unidadeRouter.post('/', async (request: Request, response: Response) => {
  const createResidenciaRepository = new CreateResidenciaRepository();
  const createResidenciaService = new CreateResidenciaService(createResidenciaRepository);
  const createResidenciaController = new CreateResidenciaController(createResidenciaService);

  const { body, statusCode } = await createResidenciaController.create(request);

  return response.status(statusCode).json(body);
});

export { unidadeRouter };
