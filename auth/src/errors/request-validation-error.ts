import { FieldValidationError } from "express-validator";

export class RequestValidationError extends Error {
  constructor(public errors: FieldValidationError[]){
    super();

    // Only becuase we're extending built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(err => {
      return { message: err.msg, field: err.path }
    });
  }
}