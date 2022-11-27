import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces';

function hasAuthorization(auth: string) {
  const token = auth.split(' ')[1];
  const data = jwt.decode(token) as Partial<IUser>;

  return token && (data.role === 'Admin' || data.role === 'Coordenador');
}

function authorization(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const auth = String(request.headers.authorization);
  if (hasAuthorization(auth)) return next();
  return response.json({ error: true, message: 'Permissão negada!' });
}

export default authorization;
