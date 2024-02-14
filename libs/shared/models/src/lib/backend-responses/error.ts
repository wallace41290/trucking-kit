export interface Error {
  data: unknown;
  errorInfo: string;
  errorType: string;
  locations: unknown;
  message: string;
  path: unknown;
}

export interface RequestError {
  data: unknown;
  errors: Error[];
}
