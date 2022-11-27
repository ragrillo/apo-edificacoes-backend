import { Router } from 'express';
import { GetCriteriosController } from '../controllers/criterio';

class CriterioRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  private setRoutes(): void {
    this.router.get('/', new GetCriteriosController().handle);  
  }
}

export default CriterioRouter;
