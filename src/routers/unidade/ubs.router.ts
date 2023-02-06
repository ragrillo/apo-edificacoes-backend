import { Request, Response, Router } from 'express';
import { CreateUBSService } from '../../services/unidade/ubs/create-ubs.service';
import { CreateUBSController } from '../../controllers/unidade/ubs/create-ubs.controller';
import { CreateUBSRepository } from '../../repositories/unidade/ubs/create-ubs.repository';

const ubsRouter = Router();

ubsRouter.post('/', async (request: Request, response: Response) => {
  const createUbsRepository = new CreateUBSRepository();
  const createUbsService = new CreateUBSService(createUbsRepository);
  const createUbsController = new CreateUBSController(createUbsService);

  const { body, statusCode } = await createUbsController.handle(request);

  return response.status(statusCode).json(body);
});

export { ubsRouter };
