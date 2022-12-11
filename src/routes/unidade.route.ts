import { Router } from 'express';
import { CadastrarUnidade } from '@src/controllers/unidade';

class UnidadeRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  private setRoutes(): void {
    this.router.post('/', new CadastrarUnidade().handle);
  }
}

export default UnidadeRouter;
