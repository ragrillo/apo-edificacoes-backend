import jwt from 'jsonwebtoken';

interface ITokenJWTAdapter {
  generate(payload: any): Promise<string>;
  verify(token: string): Promise<any>;
}

class TokenJWTAdapter implements ITokenJWTAdapter {
  constructor(private readonly secret: string) {}

  async generate(payload: any): Promise<string> {
    return jwt.sign(payload, this.secret);
  }

  async verify(token: string): Promise<any> {
    return jwt.verify(token, this.secret);
  }
}

export { ITokenJWTAdapter, TokenJWTAdapter };
