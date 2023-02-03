export interface HttpRequest<T> {
  body?: T;
  params?: any;
  query?: any;
  headers?: any;
}
