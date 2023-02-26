import { Db, MongoClient as Mongo } from 'mongodb';

const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = 'mongodb://localhost:27017';
    const database = 'apo-edificacoes-dev';

    const client = await Mongo.connect(url);

    this.client = client;
    this.db = client.db(database);

    console.log('MongoDB conectado com sucesso!');
  }
}

export default MongoClient;
