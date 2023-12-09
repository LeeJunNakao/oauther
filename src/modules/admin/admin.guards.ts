import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UnauthorizedHttpException } from './exceptions/authentication.http';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (!request.session.adminId) {
      throw new UnauthorizedHttpException();
    }

    return true;
  }
}
