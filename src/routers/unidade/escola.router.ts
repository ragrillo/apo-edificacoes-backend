import { Request, Response, Router } from 'express';
import { CreateEscolaController } from '../../controllers/unidade/escola/create-escola.controller';
import { CreateEscolaRepository } from '../../repositories/unidade/escola/create-escola.repository';
import { CreateEscolaService } from '../../services/unidade/escola/create-escola.service';

const escolaRouter = Router();

escolaRouter.post('/', async (request: Request, response: Response) => {
  const createEscolaRepository = new CreateEscolaRepository();
  const createEscolaService = new CreateEscolaService(createEscolaRepository);
  const createEscolaController = new CreateEscolaController(createEscolaService);

  const { body, statusCode } = await createEscolaController.handle(request);

  return response.status(statusCode).json(body);
});

export { escolaRouter };
