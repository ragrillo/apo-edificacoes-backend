import { config } from 'dotenv';
import { resolve } from 'path';
import { Db, MongoClient as Mongo } from 'mongodb';

const NODE_ENV = process.env.NODE_ENV || 'development';
config({ path: resolve(__dirname, `../../.env.${NODE_ENV}`) });

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const { MONGODB_URL, MONGODB_DATABASE } = process.env;

    const url = MONGODB_URL || 'mongodb://localhost:27017';
    const database = MONGODB_DATABASE || 'apo-edificacoes-dev';

    const client = await Mongo.connect(url);

    this.client = client;
    this.db = client.db(database);

    console.log('MongoDB successfully connected!');
  }
}
