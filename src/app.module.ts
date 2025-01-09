import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';import { User } from './entities/user.entity';
import { AccountModule } from './account/account.module';
import { StarategyModule } from './starategy/starategy.module';
import { JornalModule } from './jornal/jornal.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/local.strategy/local.strategy.spec';
import { ProfileController } from './auth/profile.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from './interceptors/transform.interceptor';


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
      database: 'test', // نام دیتابیس
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      migrations: [__dirname + '../migrations/*.ts'],
      synchronize: false, // فقط در محیط توسعه استفاده شود
      options: {
        encrypt: false, // اگر SQL Server نیاز به رمزنگاری ندارد
      },
    }),
    UsersModule,
    AccountModule,
    AccountModule,
    StarategyModule,
    JornalModule,
    AuthModule  ],
  controllers: [AppController, ProfileController],
  providers: [AppService,AuthService,LocalStrategy, {
    provide: APP_INTERCEPTOR,
    useClass: TransformInterceptor,
  },],
  exports: [AuthService],
})
export class AppModule {}
