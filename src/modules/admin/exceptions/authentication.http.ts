import { HttpException, HttpStatus } from '@nestjs/common';

export class AuthenticationFailHttpException extends HttpException {
  constructor() {
    super('Credentials invalid', HttpStatus.UNAUTHORIZED);
  }
}

export class UnauthorizedHttpException extends HttpException {
  constructor() {
    super('No authorization for resource', HttpStatus.UNAUTHORIZED);
  }
}
