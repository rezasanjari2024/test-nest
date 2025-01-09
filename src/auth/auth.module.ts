import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { use } from 'passport';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy/local.strategy';
import { LocalAuthGuard } from './local-auth.guard/local-auth.guard';
import { LocalGuard } from './guards/local.guard';
import { JwtStrategy } from './local.strategy/jwt.strategy';
 
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), // استراتژی پیش‌فرض را "jwt" تنظیم کنید
    JwtModule.register({
      secret: 'reza-sanajir.trader.123456789', // جایگزین با کلید واقعی
      signOptions: { expiresIn: '1d' },
    }),
    JwtModule.register({
      secret: 'reza-sanajir.trader.123456789', // کلید خصوصی
      signOptions: { expiresIn: '1D' }, // مدت زمان اعتبار توکن
    }),
    UsersModule,
  ],
  providers: [AuthService,LocalStrategy,LocalAuthGuard,LocalGuard,JwtStrategy],
  exports: [JwtModule], // برای استفاده در سایر ماژول‌ها
  controllers: [AuthController],
})
export class AuthModule {}
