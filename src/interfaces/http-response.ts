import { HttpStatusCodes } from '../utils/http-status-codes.utils';

export interface HttpResponse<T> {
  statusCode: HttpStatusCodes;
  body: T | string;
}
