import express from 'express';
import cors from 'cors';

import UnidadeRouter from './routers/unidade.router';
import AmbienteRouter from './routers/ambiente.router';

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
  }
}

export default App;
