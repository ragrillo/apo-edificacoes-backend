import { IHttpResponse } from '../interfaces/http.interface';

interface IBaseController<T> {
  findAll(): Promise<IHttpResponse<T[]>>;
}

export default IBaseController;
