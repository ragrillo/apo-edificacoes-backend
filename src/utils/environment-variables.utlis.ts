import dotenv from 'dotenv';

const NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config({ path: `.env.${NODE_ENV}` });

const PORT = process.env.PORT || '3000';
const SECRET_KEY = String(process.env.SECRET_KEY);
const DATABASE_URL = String(process.env.DATABASE_URL);

export default { PORT, SECRET_KEY, DATABASE_URL };
