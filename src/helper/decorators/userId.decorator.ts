import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
   console.log("fffff",request.user);
   
    return request.user.userId; // مقدار userId از درخواست
  },
);
