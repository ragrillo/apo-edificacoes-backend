import App from './app';
import MongoClient from './database/mongo.database';

const main = async () => {
  try {
    await MongoClient.connect();

    const { app } = new App();
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
  } catch (error: any) {
    console.error('Houve um erro ao iniciar o servidor!');
    console.error(`${error.name}: ${error.message}`);
  }
}

main();
