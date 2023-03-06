import { Router, Request, Response } from 'express';

import { IResidenciaController, ResidenciaController } from '../controllers/residencia.controller';
import { ResidenciaMongoRepository } from '../repositories/residencia.repository';
import { ResidenciaService } from '../services/residencia.service';
import { EscolaController, IEscolaController } from '../controllers/escola.controller';
import { EscolaMongoRepository } from '../repositories/escola.repository';
import { EscolaService } from '../services/escola.service';
import { UBSMongoRepository } from '../repositories/ubs.repository';
import { UBSService } from '../services/ubs.service';
import { IUBSController, UBSController } from '../controllers/ubs.controller';

class UnidadeRouter {
  public router: Router;
  private escolaController: IEscolaController;
  private residenciaController: IResidenciaController;
  private ubsController: IUBSController;

  constructor() {
    this.router = Router();

    this.escolaController = this.makeEscolaController();
    this.residenciaController = this.makeResidenciaController();
    this.ubsController = this.makeUBSController();

    this.routes();
  }

  private makeEscolaController(): IEscolaController {
    const escolaRepository = new EscolaMongoRepository();
    const escolaService = new EscolaService(escolaRepository);
    const escolaController = new EscolaController(escolaService);

    return escolaController;
  }

  private makeResidenciaController(): IResidenciaController {
    const residenciaRepository = new ResidenciaMongoRepository();
    const residenciaService = new ResidenciaService(residenciaRepository);
    const residenciaController = new ResidenciaController(residenciaService);

    return residenciaController;
  }

  private makeUBSController(): IUBSController {
    const ubsRepository = new UBSMongoRepository();
    const ubsService = new UBSService(ubsRepository);
    const ubsController = new UBSController(ubsService);

    return ubsController;
  }

  private routes(): void {
    this.router.post('/escolas', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.escolaController.create(request);
      return response.status(statusCode).json(body);
    });

    this.router.get('/escolas', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.escolaController.findAll();
      return response.status(statusCode).json(body);
    });

    this.router.get('/escolas/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.escolaController.findById(request);
      return response.status(statusCode).json(body);
    });

    this.router.get('/escolas/proprietario/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.escolaController.findByProprietarioId(request);

      return response.status(statusCode).json(body);
    });

    this.router.put('/escolas/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.escolaController.update(request);
      return response.status(statusCode).json(body);
    });

    this.router.delete('/escolas/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.escolaController.remove(request);
      return response.status(statusCode).json(body);
    });

    this.router.post('/residencias', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.residenciaController.create(request);
      return response.status(statusCode).json(body);
    });

    this.router.get('/residencias', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.residenciaController.findAll();
      return response.status(statusCode).json(body);
    });

    this.router.get('/residencias/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.residenciaController.findById(request);
      return response.status(statusCode).json(body);
    });

    this.router.put('/residencias/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.residenciaController.update(request);
      return response.status(statusCode).json(body);
    });

    this.router.delete('/residencias/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.residenciaController.remove(request);
      return response.status(statusCode).json(body);
    });

    this.router.post('/ubs', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.ubsController.create(request);
      return response.status(statusCode).json(body);
    });

    this.router.get('/ubs', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.ubsController.findAll();
      return response.status(statusCode).json(body);
    });

    this.router.get('/ubs/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.ubsController.findById(request);
      return response.status(statusCode).json(body);
    });

    this.router.get('/ubs/proprietario/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.ubsController.findByProprietarioId(request);
      return response.status(statusCode).json(body);
    });

    this.router.put('/ubs/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.ubsController.update(request);
      return response.status(statusCode).json(body);
    });

    this.router.delete('/ubs/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.ubsController.remove(request);
      return response.status(statusCode).json(body);
    });
  }
}

export default UnidadeRouter;
