import express from 'express';
import { MongoClient } from './database/mongo.database';
import { usuarioRouter } from './routers/usuario.router';

const main = async () => {
  await MongoClient.connect();

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api/v1/usuarios', usuarioRouter);

  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
}

main();
