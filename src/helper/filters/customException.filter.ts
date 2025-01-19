import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(message: string,httpStatus: HttpStatus) {
    super(message, httpStatus);
  }
}
