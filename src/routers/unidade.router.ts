import { Request, Response, Router } from 'express';
import { FindUnidadesByIdMongoRepository } from '../repositories/unidade/find-unidades-by-id.repository';
import { CreateResidenciaController } from '../controllers/unidade/create-residencia.controller';
import { CreateResidenciaRepository } from '../repositories/unidade/create-residencia.repository';
import { CreateResidenciaService } from '../services/unidade/create-residencia.service';
import { FindUnidadesByIdService } from '../services/unidade/find-unidades-by-id.service';
import { FindUnidadesByIdController } from '../controllers/unidade/find-unidades-by-id.controller';
import { CreateEscolaController } from '../controllers/unidade/escola/create-escola.controller';
import { CreateEscolaRepository } from '../repositories/unidade/escola/create-escola.repository';
import { CreateEscolaService } from '../services/unidade/escola/create-escola.service';
import { CreateUBSService } from '../services/unidade/ubs/create-ubs.service';
import { CreateUBSController } from '../controllers/unidade/ubs/create-ubs.controller';
import { CreateUBSRepository } from '../repositories/unidade/ubs/create-ubs.repository';
import { HttpStatusCodes } from '../utils/http-status-codes.utils';

const unidadeRouter = Router();

unidadeRouter.post('/', async (request: Request, response: Response) => {
  const { edificacao } = request.query;

  switch (edificacao) {
    case 'residencia':
      const createResidenciaRepository = new CreateResidenciaRepository();
      const createResidenciaService = new CreateResidenciaService(createResidenciaRepository);
      const createResidenciaController = new CreateResidenciaController(createResidenciaService);

      await createResidenciaController.create(request);

      break;
    case 'escola':
      const createEscolaRepository = new CreateEscolaRepository();
      const createEscolaService = new CreateEscolaService(createEscolaRepository);
      const createEscolaController = new CreateEscolaController(createEscolaService);

      await createEscolaController.handle(request);

      break;
    case 'ubs':
      const createUbsRepository = new CreateUBSRepository();
      const createUbsService = new CreateUBSService(createUbsRepository);
      const createUbsController = new CreateUBSController(createUbsService);

      await createUbsController.handle(request);

      break;
  }

  return response.status(HttpStatusCodes.CREATED).send();
});

unidadeRouter.get('/:id', async (request: Request, response: Response) => {
  const findUnidadesByIdRepository = new FindUnidadesByIdMongoRepository();
  const findUnidadesByIdService = new FindUnidadesByIdService(findUnidadesByIdRepository);
  const findUnidadesByIdController = new FindUnidadesByIdController(findUnidadesByIdService);

  const { statusCode, body } = await findUnidadesByIdController.findEscolas(request);

  return response.status(statusCode).json(body);
});

export { unidadeRouter };
