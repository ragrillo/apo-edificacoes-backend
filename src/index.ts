import App from './app';
import Database from './database';

const server = new App();
const database = new Database();

database.connect('mongodb://localhost:27017/basededados');
server.initialize(3333);
