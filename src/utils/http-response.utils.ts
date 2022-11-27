class HttpResponse {
  public static create(status: number, body?: any) {
    const httpResponse = { status, body };
    return httpResponse;
  }
}

export default HttpResponse;
