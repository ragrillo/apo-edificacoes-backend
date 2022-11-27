import { Router } from 'express';

import {
  GetAllUsersController,
  GetUserController,
  UpdateUserController,
  LoginUsuarioController,
  CadastrarUsuarioController,
} from '../controllers/usuario';

class UsuarioRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  private setRoutes(): void {
    this.router.get('/', new GetAllUsersController().handle);
    this.router.get('/:id', new GetUserController().handle);
    this.router.post('/', new CadastrarUsuarioController().handle);
    this.router.post('/login', new LoginUsuarioController().handle);
    this.router.put('/:id', new UpdateUserController().handle);
  }
}

export default UsuarioRouter;
