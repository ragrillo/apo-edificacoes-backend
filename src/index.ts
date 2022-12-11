import App from '@src/app';
import Database from '@src/database';
import { environmentVarialbles } from '@src/utils';

const server = new App();
const database = new Database();

const { DATABASE_URL, PORT } = environmentVarialbles;

database.connect(DATABASE_URL);
server.initialize(PORT);
