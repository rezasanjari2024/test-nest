import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  
  @Injectable()
  export class TransformInterceptor<T> implements NestInterceptor<T, any> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      // دریافت پاسخ و قالب‌بندی آن
      return next.handle().pipe(
        map((data) => {
          const statusCode = context.switchToHttp().getResponse().statusCode;
          return {
            statusCode, // کد وضعیت HTTP
            message: 'Request successful', // پیام موفقیت (قابل تغییر)
            data, // داده بازگشتی از کنترلر
          };
        }),
      );
    }
  }
  