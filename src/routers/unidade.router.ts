import { Router, Request, Response } from 'express';
import { EscolaController } from '../controllers/escola.controller';
import { EscolaMongoRepository } from '../repositories/escola.repository';
import { EscolaService } from '../services/escola.service';

function makeEscolaController() {
  const escolaRepository = new EscolaMongoRepository();
  const escolaService = new EscolaService(escolaRepository);
  const escolaController = new EscolaController(escolaService);

  return escolaController;
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
  }
}

export default UnidadeRouter;