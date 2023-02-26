import { HttpResponse } from '../interfaces/http.interface';

interface IBaseController<T> {
  findAll(): Promise<HttpResponse<T[]>>;
}

export default IBaseController;
