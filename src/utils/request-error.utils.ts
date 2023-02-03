import { HttpStatusCodes } from './http-status-codes.utils';

interface IRequestError {
  statusCode: HttpStatusCodes;
  message: string;
}

export class RequestError extends Error implements IRequestError {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}
