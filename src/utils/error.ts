type ErrorMessage = string;
type ErrorStatus = string;
type Data = string | null;

export class CustomError extends Error {
  status: string;

  constructor(message: ErrorMessage, status: ErrorStatus, data: Data) {
    super(message); // Pass the message to the Error class constructor
    this.name = 'CustomError';
    this.status = status || 'fail';
  }
}
