import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './entities/user.entity';

@Module({
  imports: [
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
