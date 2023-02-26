import { Router, Request, Response } from 'express';

import { EmpresaMongoRepository } from '../repositories/empresa.repository';
import { EmpresaService } from '../services/empresa.service';
import { EmpresaController, IEmpresaController } from '../controllers/empresa.controller';

class EmpresaRouter {
  public router: Router;
  private empresaController: IEmpresaController;

  constructor() {
    this.router = Router();
    this.empresaController = this.makeEmpresaController();
    this.routes();
  }

  private makeEmpresaController(): IEmpresaController {
    const empresaRepository = new EmpresaMongoRepository();
    const empresaService = new EmpresaService(empresaRepository);
    const empresaController = new EmpresaController(empresaService);

    return empresaController;
  }

  private routes(): void {
    this.router.post('/', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.empresaController.create(request);
      return response.status(statusCode).json(body);
    });

    this.router.get('/', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.empresaController.findAll();
      return response.status(statusCode).json(body);
    });

    this.router.get('/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.empresaController.findById(request);
      return response.status(statusCode).json(body);
    });

    this.router.put('/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.empresaController.update(request);
      return response.status(statusCode).json(body);
    });

    this.router.delete('/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.empresaController.remove(request);
      return response.status(statusCode).json(body);
    });
  }
}

export default EmpresaRouter;
