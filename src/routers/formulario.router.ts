import { Router, Request, Response } from 'express';

import { FormularioMongoRepository } from '../repositories/formulario.repository';
import { FormularioService } from '../services/formulario.service';
import { FormularioController, IFormularioController } from '../controllers/formulario.controller';

class FormularioRouter {
  public router: Router;
  private formularioController: IFormularioController;

  constructor() {
    this.router = Router();
    this.formularioController = this.makeFormularioController();
    this.routes();
  }

  private makeFormularioController(): IFormularioController {
    const formularioRepository = new FormularioMongoRepository();
    const formularioService = new FormularioService(formularioRepository);
    const formularioController = new FormularioController(formularioService);

    return formularioController;
  }

  private routes(): void {
    this.router.post('/', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.formularioController.create(request);
      return response.status(statusCode).json(body);
    });

    this.router.get('/', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.formularioController.findAll();
      return response.status(statusCode).json(body);
    });

    this.router.get('/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.formularioController.findById(request);
      return response.status(statusCode).json(body);
    });

    this.router.put('/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.formularioController.update(request);
      return response.status(statusCode).json(body);
    });

    this.router.delete('/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.formularioController.remove(request);
      return response.status(statusCode).json(body);
    });
  }
}

export default FormularioRouter;
