import { IHttpRequest, IHttpResponse } from '../interfaces/http.interface';

interface IBaseController<T, D> {
  create(httpRequest: IHttpRequest<D>): Promise<IHttpResponse<T>>;
  findAll(): Promise<IHttpResponse<T[]>>;
  findById(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<T>>;
}

export default IBaseController;
