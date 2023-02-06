import { resolve } from 'path';
import { config } from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { HttpStatusCodes } from '../utils/http-status-codes.utils';

export interface ApiKeyMiddlewareOptions {
  handle(req: Request, res: Response, next: NextFunction): void;
}

const NODE_ENV = process.env.NODE_ENV || 'development';
config({ path: resolve(__dirname, `../../.env.${NODE_ENV}`) });

export class ApiKeyMiddleware {
  public handle(request: Request, response: Response, next: NextFunction) {
    if (NODE_ENV === 'development') {
      return next();
    }

    if (request.headers['x-api-key'] === process.env.API_KEY) {
      return next();
    }

    return response.status(HttpStatusCodes.UNAUTHORIZED).send('Permissão negada.');
  }
}
