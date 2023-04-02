import express from 'express';
import cors from 'cors';

import UnidadeRouter from './routers/unidade.router';
import AmbienteRouter from './routers/ambiente.router';
import EmpresaRouter from './routers/empresa.router';
import UsuarioRouter from './routers/usuario.router';
import CriterioRouter from './routers/criterio.router';
import FormularioRouter from './routers/formulario.router';
import DimensaoRouter from './routers/dimensao.router';

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
    const PREFIX = '/api/v1';

    this.app.use(`${PREFIX}/unidades`, new UnidadeRouter().router);
    this.app.use(`${PREFIX}/ambientes`, new AmbienteRouter().router);
    this.app.use(`${PREFIX}/empresas`, new EmpresaRouter().router);
    this.app.use(`${PREFIX}/usuarios`, new UsuarioRouter().router);
    this.app.use(`${PREFIX}/criterios`, new CriterioRouter().router);
    this.app.use(`${PREFIX}/formularios`, new FormularioRouter().router);
    this.app.use(`${PREFIX}/dimensoes`, new DimensaoRouter().router);
  }
}

export default App;
