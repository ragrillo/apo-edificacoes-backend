import { Db, MongoClient as Mongo } from 'mongodb';

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = 'mongodb://localhost:27017';
    const database = 'apo-edificacoes-db';
    const username = 'root';
    const password = 'root';

    const client = await Mongo.connect(url, {
      auth: { username, password },
    });

    this.client = client;
    this.db = client.db(database);

    console.log('MongoDB successfully connected!');
  }
}
