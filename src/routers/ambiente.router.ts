import { Request, Response, Router } from 'express';
import { CreateAmbienteController } from '../controllers/ambiente/create-ambiente.controller';
import { CreateAmbienteRepository } from '../repositories/ambiente/create-ambiente.repository';
import { CreateAmbienteService } from '../services/ambiente/create-ambiente.service';

const ambienteRouter = Router();

ambienteRouter.post('/', async (request: Request, response: Response) => {
  const createAmbienteRepository = new CreateAmbienteRepository();
  const createAmbienteService = new CreateAmbienteService(createAmbienteRepository);
  const createAmbienteController = new CreateAmbienteController(createAmbienteService);

  const { body, statusCode } = await createAmbienteController.handle(request);

  return response.status(statusCode).json(body);
});

export { ambienteRouter };
