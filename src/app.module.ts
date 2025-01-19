import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';import { User } from './entities/user.entity';
import { AccountModule } from './account/account.module';

import { JornalModule } from './jornal/jornal.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/local.strategy/local.strategy.spec';
import { ProfileController } from './auth/profile.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from './helper/interceptors/transform.interceptor';
import { ReasonModule } from './reason/reason.module';
import extractUserIdMiddleware from './helper/middleware/ExtractUserIdMiddleware';
import { ThrottlerModule, ThrottlerModuleOptions } from '@nestjs/throttler';
import { StrategyModule } from './starategy/strategy.module';
import { ApprovalModule } from './approval/approval.module';
// const throttlerConfig: ThrottlerModuleOptions = {
//   ttl: 60,
//   limit: 10,
// };

@Module({
  imports: [
    // PassportModule,
    // JwtModule.register({
    //   secret: 'secretKey', // جایگزین با کلید امن‌تر
    //   signOptions: { expiresIn: '1h' },
    // }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433, // پورت پیش‌فرض SQL Server
      username: 'sa', // نام کاربری
      password: '26702670', // رمز عبور
      database: 'lion', // نام دیتابیس
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      migrations: [__dirname + '../migrations/*.ts'],
      synchronize: false, // فقط در محیط توسعه استفاده شود
      options: {
        encrypt: false, // اگر SQL Server نیاز به رمزنگاری ندارد
      },
    }),
    // ThrottlerModule.forRoot({
    //   ttl: 60000,
    //   limit: 10,
    // }),
    UsersModule,
    AccountModule,
  
    StrategyModule,
    JornalModule,
    AuthModule,
    ReasonModule,
    ApprovalModule  ],
  controllers: [AppController, ProfileController],
  providers: [AppService,AuthService,LocalStrategy, {
    provide: APP_INTERCEPTOR,
    useClass: TransformInterceptor,
  },],
  exports: [AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(extractUserIdMiddleware) // استفاده از Middleware
      .exclude(
        'auth/login',  // برای مسیرهایی که نمی‌خواهید ایگنور شود
        'auth/register',
        'users'
      )
      .forRoutes('*'); // اعمال بر روی تمام روترها
  }
}
