import { config } from 'dotenv';
import { resolve } from 'path';
import { Db, MongoClient as Mongo } from 'mongodb';

const NODE_ENV = process.env.NODE_ENV || 'development';
const environmentFilepath = resolve(__dirname, '..', '..', `.env.${NODE_ENV}`)
config({ path: environmentFilepath });

const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = String(process.env.MONGODB_URL);
    const database = process.env.MONGODB_DATABASE;

    const client = await Mongo.connect(url);

    this.client = client;
    this.db = client.db(database);

    console.log('MongoDB conectado com sucesso!');
  }
}

export default MongoClient;
