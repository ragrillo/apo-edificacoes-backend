import express from 'express';
import cors from 'cors';

import UnidadeRouter from './routers/unidade.router';
import AmbienteRouter from './routers/ambiente.router';
import EmpresaRouter from './routers/empresa.router';
import UsuarioRouter from './routers/usuario.router';
import CriterioRouter from './routers/criterio.router';
import FormularioRouter from './routers/formulario.router';

class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.loadMiddlewares();
    this.loadRoutes();
  }

  private loadMiddlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private loadRoutes(): void {
    this.app.use('/api/v1/unidades', new UnidadeRouter().router);
    this.app.use('/api/v1/ambientes', new AmbienteRouter().router);
    this.app.use('/api/v1/empresas', new EmpresaRouter().router);
    this.app.use('/api/v1/usuarios', new UsuarioRouter().router);
    this.app.use('/api/v1/criterios', new CriterioRouter().router);
    this.app.use('/api/v1/formularios', new FormularioRouter().router);
  }
}

export default App;
