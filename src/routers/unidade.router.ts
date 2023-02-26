import { Router, Request, Response } from 'express';
import { ResidenciaController } from '../controllers/residencia.controller';
import { ResidenciaMongoRepository } from '../repositories/residencia.repository';
import { ResidenciaService } from '../services/residencia.service';
import { EscolaController } from '../controllers/escola.controller';
import { EscolaMongoRepository } from '../repositories/escola.repository';
import { EscolaService } from '../services/escola.service';

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

    this.router.get('/residencias', async (request: Request, response: Response) => {
      const residenciaController = makeResidenciaController();
      const { statusCode, body } = await residenciaController.findAll();

      return response.status(statusCode).json(body);
    });
  }
}

export default UnidadeRouter;