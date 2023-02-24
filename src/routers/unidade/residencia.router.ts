import { Request, Response, Router } from 'express';
import { CreateResidenciaController } from '../../controllers/unidade/residencia/create-residencia.controller';
import { CreateResidenciaRepository } from '../../repositories/unidade/residencia/create-residencia.repository';
import { CreateResidenciaService } from '../../services/unidade/residencia/create-residencia.service';

const residenciaRouter = Router();

residenciaRouter.post('/', async (request: Request, response: Response) => {
  const createResidenciaRepository = new CreateResidenciaRepository();
  const createResidenciaService = new CreateResidenciaService(createResidenciaRepository);
  const createResidenciaController = new CreateResidenciaController(createResidenciaService);

  const { body, statusCode } = await createResidenciaController.handle(request);

  return response.status(statusCode).json(body);
});

export { residenciaRouter };
