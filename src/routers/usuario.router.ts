import { Router, Request, Response } from 'express';

import { TokenJWTAdapter } from '../adapters/token-jwt.adapter';
import { HashPasswordAdapter } from '../adapters/hash-password.adapter';

import { UsuarioMongoRepository } from '../repositories/usuario.repository';
import { UsuarioService } from '../services/usuario.service';
import { UsuarioController, IUsuarioController } from '../controllers/usuario.controller';

class UsuarioRouter {
  public router: Router;
  private usuarioController: IUsuarioController;

  constructor() {
    this.router = Router();
    this.usuarioController = this.makeUsuarioController();
    this.routes();
  }

  private makeUsuarioController(): UsuarioController {
    const tokenJWTAdapter = new TokenJWTAdapter('secret');
    const hashPasswordAdapter = new HashPasswordAdapter();

    const usuarioRepository = new UsuarioMongoRepository();
    const usuarioService = new UsuarioService(usuarioRepository, hashPasswordAdapter, tokenJWTAdapter);
    const usuarioController = new UsuarioController(usuarioService);

    return usuarioController;
  }

  private routes(): void {
    this.router.post('/', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.usuarioController.create(request);
      return response.status(statusCode).json(body);
    });

    this.router.get('/', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.usuarioController.findAll();
      return response.status(statusCode).json(body);
    });

    this.router.get('/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.usuarioController.findById(request);
      return response.status(statusCode).json(body);
    });

    this.router.put('/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.usuarioController.update(request);
      return response.status(statusCode).json(body);
    });

    this.router.delete('/:id', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.usuarioController.remove(request);
      return response.status(statusCode).json(body);
    });

    this.router.post('/login', async (request: Request, response: Response) => {
      const { statusCode, body } = await this.usuarioController.login(request);
      return response.status(statusCode).json(body);
    });
  }
}

export default UsuarioRouter;
