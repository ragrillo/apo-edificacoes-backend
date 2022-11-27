import { connect } from 'mongoose';

class Database {
  public async connect(url: string): Promise<void> {
    await connect(url);
  }
}

export default Database;
