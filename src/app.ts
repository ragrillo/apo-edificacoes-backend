import Routes from '@src/routes';
import path from 'path';
import cors from 'cors';
import express from 'express';

class App {
  private routes: Routes;
  private app: express.Application;

  constructor() {
    this.app = express();
    this.routes = new Routes();

    this.setMiddlewares();
    this.setRoutes();
    this.setApiDocumentation();
  }

  private setMiddlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setRoutes(): void {
    this.app.use('/api/v1/usuario', this.routes.usuario);
    this.app.use('/api/v1/unidade', this.routes.unidade);
    this.app.use('/api/v1/ambiente', this.routes.ambiente);
    this.app.use('/api/v1/criterio', this.routes.criterio);
  }

  private setApiDocumentation(): void {
    const filePath = path.join(__dirname, '..', 'docs', 'index.html');
    this.app.get('/api/v1/', (_request, response) => response.sendFile(filePath));
  }

  public initialize(port: string): void {
    this.app.listen(port, () => console.log(`server is running on port ${port}`));
  }
}

export default App;
