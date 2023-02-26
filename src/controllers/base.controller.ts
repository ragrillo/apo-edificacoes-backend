import { IHttpRequest, IHttpResponse } from '../interfaces/http.interface';

interface IBaseController<T, D> {
  create(httpRequest: IHttpRequest<D>): Promise<IHttpResponse<void>>;
  findAll(): Promise<IHttpResponse<T[]>>;
  findById(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<T>>;
  remove(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<void>>;
}

export default IBaseController;
