import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

export class JwtGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    console.log('JwtGuard:context');
    const request = context.switchToHttp().getRequest();
    console.log(  request.headers['authorization']);
    
    return super.canActivate(context);
  }
    }
