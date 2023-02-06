import { config } from 'dotenv';
import { resolve } from 'path';

const NODE_ENV = process.env.NODE_ENV || 'development';

config({ path: resolve(__dirname, `../../.env.${NODE_ENV}`) });

const { PORT, API_KEY, MONGODB_URL, MONGODB_DATABASE, SECRET_KEY } = process.env;

export { NODE_ENV, PORT, API_KEY, MONGODB_URL, MONGODB_DATABASE, SECRET_KEY };
