export class ResponseError {
  public readonly message: string;
  public readonly status: number;

  constructor(data?: any, status?: number) {
    this.message = data;
    this.status = status;
  }
}
