import { Router, Request, Response } from 'express';

import { ResidenciaController } from '../controllers/residencia.controller';
import { ResidenciaMongoRepository } from '../repositories/residencia.repository';
import { ResidenciaService } from '../services/residencia.service';
import { EscolaController } from '../controllers/escola.controller';
import { EscolaMongoRepository } from '../repositories/escola.repository';
import { EscolaService } from '../services/escola.service';
import { UBSMongoRepository } from '../repositories/ubs.repository';
import { UBSService } from '../services/ubs.service';
import { UBSController } from '../controllers/ubs.controller';

function makeEscolaController() {
  const escolaRepository = new EscolaMongoRepository();
  const escolaService = new EscolaService(escolaRepository);
  const escolaController = new EscolaController(escolaService);

  return escolaController;
}

function makeResidenciaController() {
  const residenciaRepository = new ResidenciaMongoRepository();
  const residenciaService = new ResidenciaService(residenciaRepository);
  const residenciaController = new ResidenciaController(residenciaService);

  return residenciaController;
}

function makeUBSController() {
  const ubsRepository = new UBSMongoRepository();
  const ubsService = new UBSService(ubsRepository);
  const ubsController = new UBSController(ubsService);

  return ubsController;
}

class UnidadeRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    const escolaController = makeEscolaController();
    
    this.router.get('/escolas', async (request: Request, response: Response) => {
      const { statusCode, body } = await escolaController.findAll();

      return response.status(statusCode).json(body);
    });

    this.router.post('/escolas', async (request: Request, response: Response) => {
      const { statusCode, body } = await escolaController.create(request);

      return response.status(statusCode).json(body);
    });

    this.router.get('/residencias', async (request: Request, response: Response) => {
      const residenciaController = makeResidenciaController();
      const { statusCode, body } = await residenciaController.findAll();

      return response.status(statusCode).json(body);
    });

    this.router.post('/residencias', async (request: Request, response: Response) => {
      const residenciaController = makeResidenciaController();
      const { statusCode, body } = await residenciaController.create(request);

      return response.status(statusCode).json(body);
    });

    this.router.get('/ubs', async (request: Request, response: Response) => {
      const ubsController = makeUBSController();
      const { statusCode, body } = await ubsController.findAll();

      return response.status(statusCode).json(body);
    });

    this.router.post('/ubs', async (request: Request, response: Response) => {
      const ubsController = makeUBSController();
      const { statusCode, body } = await ubsController.create(request);

      return response.status(statusCode).json(body);
    });
  }
}

export default UnidadeRouter;