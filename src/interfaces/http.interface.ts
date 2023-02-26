enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

interface IHttpRequest {
  body?: any;
  params?: any;
  query?: any;
  headers?: any;
}

interface IHttpResponse<T> {
  statusCode: HttpStatusCode;
  body: T;
}

export { IHttpRequest, IHttpResponse, HttpStatusCode };
