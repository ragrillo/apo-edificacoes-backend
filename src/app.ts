import express from 'express';
import cors from 'cors';

import UnidadeRouter from './routers/unidade.router';
import AmbienteRouter from './routers/ambiente.router';
import EmpresaRouter from './routers/empresa.router';
import UsuarioRouter from './routers/usuario.router';
import CriterioRouter from './routers/criterio.router';
import DimensaoRouter from './routers/dimensao.router';
import FormularioRouter from './routers/formulario.router';

class App {
  public app: express.Application;

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

  private grettings(): void {
    this.app.get('/api', (_request, response) => {
      response.send('Bem vindo a API oficial da APO Edificações');
    });
  }

  private loadRoutes(): void {
    this.grettings();

    this.app.use('/api/unidades', new UnidadeRouter().router);
    this.app.use('/api/ambientes', new AmbienteRouter().router);
    this.app.use('/api/empresas', new EmpresaRouter().router);
    this.app.use('/api/usuarios', new UsuarioRouter().router);
    this.app.use('/api/criterios', new CriterioRouter().router);
    this.app.use('/api/formularios', new FormularioRouter().router);
    this.app.use('/api/dimensoes', new DimensaoRouter().router);
  }
}

export default App;
