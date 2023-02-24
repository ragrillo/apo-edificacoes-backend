import { Request, Response, Router } from 'express';
import { FindUnidadesByIdMongoRepository } from '../repositories/unidade/find-unidades-by-id.repository';
import { CreateResidenciaController } from '../controllers/unidade/create-residencia.controller';
import { CreateResidenciaRepository } from '../repositories/unidade/create-residencia.repository';
import { CreateResidenciaService } from '../services/unidade/create-residencia.service';
import { FindUnidadesByIdService } from '../services/unidade/find-unidades-by-id.service';
import { FindUnidadesByIdController } from '../controllers/unidade/find-unidades-by-id.controller';

const unidadeRouter = Router();

unidadeRouter.post('/', async (request: Request, response: Response) => {
  const createResidenciaRepository = new CreateResidenciaRepository();
  const createResidenciaService = new CreateResidenciaService(createResidenciaRepository);
  const createResidenciaController = new CreateResidenciaController(createResidenciaService);

  const { body, statusCode } = await createResidenciaController.create(request);

  return response.status(statusCode).json(body);
});

unidadeRouter.get('/:id', async (request: Request, response: Response) => {
  const findUnidadesByIdRepository = new FindUnidadesByIdMongoRepository();
  const findUnidadesByIdService = new FindUnidadesByIdService(findUnidadesByIdRepository);
  const findUnidadesByIdController = new FindUnidadesByIdController(findUnidadesByIdService);

  const { statusCode, body } = await findUnidadesByIdController.findEscolas(request);

  return response.status(statusCode).json(body);
});

export { unidadeRouter };
