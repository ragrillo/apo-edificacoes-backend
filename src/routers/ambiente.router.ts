import { Router, Request, Response } from 'express';

import { AmbienteMongoRepository } from '../repositories/ambiente.repository';
import { AmbienteService } from '../services/ambiente.service';
import { AmbienteController, IAmbienteController } from '../controllers/ambiente.controller';

class AmbienteRouter {
  public router: Router;
  private ambienteController: IAmbienteController;

  constructor() {
    this.router = Router();

    this.ambienteController = this.makeAmbienteController();

    this.routes();
  }

  private makeAmbienteController(): IAmbienteController {
    const ambienteRepository = new AmbienteMongoRepository();
    const ambienteService = new AmbienteService(ambienteRepository);
    const ambienteController = new AmbienteController(ambienteService);

    return ambienteController;
  }

  private routes(): void {
    this.router.post('/', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.ambienteController.create(request);
      return response.status(statusCode).json(body);
    });

    this.router.get('/', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.ambienteController.findAll();
      return response.status(statusCode).json(body);
    });

    this.router.get('/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.ambienteController.findById(request);
      return response.status(statusCode).json(body);
    });

    this.router.put('/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.ambienteController.update(request);
      return response.status(statusCode).json(body);
    });

    this.router.delete('/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.ambienteController.remove(request);
      return response.status(statusCode).json(body);
    });
  }
}

export default AmbienteRouter;
