import { Router } from 'express';
import { CadastrarEmpresa, GetAllEmpresas } from '../controllers/empresa';

class EmpresaRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  private setRoutes(): void {
    this.router.post('/', new CadastrarEmpresa().handle);
    this.router.get('/', new GetAllEmpresas().handle);  
  }
}

export default EmpresaRouter;
