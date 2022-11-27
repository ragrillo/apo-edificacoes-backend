import { Router } from 'express';
import {
  UsuarioRouter,
  UnidadeRouter,
  AmbienteRouter,
  EmpresaRouter,
  CriterioRouter,
} from './routes.route';

class Routes {
  public usuario: Router;
  public unidade: Router;
  public empresa: Router;
  public ambiente: Router;
  public criterio: Router;

  constructor() {
    this.usuario = new UsuarioRouter().router;
    this.unidade = new UnidadeRouter().router;
    this.ambiente = new AmbienteRouter().router;
    this.empresa = new EmpresaRouter().router;
    this.criterio = new CriterioRouter().router;
  }
}

export default Routes;
