export enum httpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export interface IPayload {
  body?: Object
  params?: Object
}