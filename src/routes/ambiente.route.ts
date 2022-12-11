import { Router } from 'express';
import { CadastrarAmbiente, GetAmbientesController } from '../controllers/ambiente';

class AmbienteRouter {
  public router: Router;
  
  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  private setRoutes(): void {
    this.router.get('/', new GetAmbientesController().handle);
    this.router.post('/', new CadastrarAmbiente().handle);
  }
}

export default AmbienteRouter;
