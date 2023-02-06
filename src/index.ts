import express from 'express';
import { MongoClient } from './database/mongo.database';

import { usuarioRouter } from './routers/usuario.router';
import { formularioRouter } from './routers/formulario.router';
import { ambienteRouter } from './routers/ambiente.router';
import { escolaRouter } from './routers/unidade/escola.router';
import { ubsRouter } from './routers/unidade/ubs.router';

import { ApiKeyMiddleware } from './middlewares/api-key.middleware';

const main = async () => {
  await MongoClient.connect();

  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', new ApiKeyMiddleware().handle);

  app.use('/api/v1/usuarios', usuarioRouter);
  app.use('/api/v1/formularios', formularioRouter);
  app.use('/api/v1/ambientes', ambienteRouter);
  app.use('/api/v1/unidades/escolas', escolaRouter);
  app.use('/api/v1/unidades/ubs', ubsRouter);

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

main();
