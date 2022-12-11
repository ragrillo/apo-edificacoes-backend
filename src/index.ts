import App from '@src/app';
import Database from '@src/database';
import dotenv from 'dotenv';

const NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config({ path: `.env.${NODE_ENV}` });

const server = new App();
const database = new Database();

const PORT = process.env.PORT || '3000';
const DATABASE_URL = String(process.env.DATABASE_URL);

database.connect(DATABASE_URL);
server.initialize(PORT);
