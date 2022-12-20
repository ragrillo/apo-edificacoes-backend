import { Router } from 'express';
import { CadastrarUnidade, GetUnidadesByUsuarioController } from '@src/controllers/unidade';

class UnidadeRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  private setRoutes(): void {
    this.router.get('/:usuario', new GetUnidadesByUsuarioController().handle);
    this.router.post('/', new CadastrarUnidade().handle);
  }
}

export default UnidadeRouter;
