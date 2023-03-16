import { Router, Request, Response } from 'express';

import { CriterioMongoRepository } from '../repositories/criterio.repository';
import { CriterioService } from '../services/criterio.service';
import { CriterioController, ICriterioController } from '../controllers/criterio.controller';

class CriterioRouter {
  public router: Router;
  private criterioController: ICriterioController;

  constructor() {
    this.router = Router();
    this.criterioController = this.makeCriterioController();
    this.routes();
  }

  private makeCriterioController(): ICriterioController {
    const criterioRepository = new CriterioMongoRepository();
    const criterioService = new CriterioService(criterioRepository);
    const criterioController = new CriterioController(criterioService);

    return criterioController;
  }

  private routes(): void {
    this.router.get('/:number', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.criterioController.findAll(request);
      return response.status(statusCode).json(body);
    });
  }
}

export default CriterioRouter;
