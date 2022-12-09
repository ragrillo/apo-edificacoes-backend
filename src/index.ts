import { config } from 'dotenv';

import App from './app';
import Database from './database';

const NODE_ENV = process.env.NODE_ENV || 'development';

config({ path: `.env.${NODE_ENV}` });

const server = new App();
const database = new Database();

const PORT = process.env.PORT || '3000';
const DATABASE_URL = String(process.env.DATABASE_URL);

database.connect(DATABASE_URL);
server.initialize(PORT);
