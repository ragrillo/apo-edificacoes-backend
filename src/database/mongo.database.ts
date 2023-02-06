import { Db, MongoClient as Mongo } from 'mongodb';
import { MONGODB_DATABASE, MONGODB_URL } from '../utils/environment-variables.utils';

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = MONGODB_URL || 'mongodb://localhost:27017';
    const database = MONGODB_DATABASE || 'apo-edificacoes-dev';

    const client = await Mongo.connect(url);

    this.client = client;
    this.db = client.db(database);

    console.log('MongoDB successfully connected!');
  }
}
