import { NextFunction, Request, Response } from 'express';
import { HttpStatusCodes } from '../utils/http-status-codes.utils';
import { API_KEY, NODE_ENV } from '../utils/environment-variables.utils';

export interface ApiKeyMiddlewareOptions {
  handle(req: Request, res: Response, next: NextFunction): void;
}

export class ApiKeyMiddleware {
  public handle(request: Request, response: Response, next: NextFunction) {
    if (NODE_ENV === 'development') {
      return next();
    }

    if (request.headers['x-api-key'] === API_KEY) {
      return next();
    }

    return response.status(HttpStatusCodes.UNAUTHORIZED).send('Permissão negada.');
  }
}
