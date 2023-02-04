import * as jwt from 'jsonwebtoken';
import { LoginPayload } from '../services/usuario/login.service';

export interface IJwtTokenAdapter {
  sign(payload: LoginPayload): Promise<string>;
}

export class JwtTokenAdapter implements IJwtTokenAdapter {
  constructor(private readonly secret: string) { }

  async sign(payload: LoginPayload): Promise<string> {
    return jwt.sign(payload, this.secret, { expiresIn: '1d' });
  }
}
