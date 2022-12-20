import { Router } from 'express';
import { GetCriteriosController, CadastrarCriteriosController } from '@src/controllers/criterio';

class CriterioRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  private setRoutes(): void {
    this.router.get('/', new GetCriteriosController().handle);
    this.router.post('/', new CadastrarCriteriosController().handle);
  }
}

export default CriterioRouter;
