import { IHttpRequest, IHttpResponse } from '../interfaces/http.interface';

interface IBaseController<T, D> {
  create(data: IHttpRequest<D>): Promise<IHttpResponse<T>>;
  findAll(): Promise<IHttpResponse<T[]>>;
}

export default IBaseController;
