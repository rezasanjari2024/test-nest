import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { log } from 'console';
import { LoginDto } from 'src/dto/user/login.dto';
import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,

  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.findUserByUsername(username); 
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result; // بازگشت اطلاعات بدون رمز عبور
    }
    return null;
  }

  async login(username,password) {
  var user =await this.validateUser(username, password);

    const payload = { userName: user.UserName, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private async findUserByUsername(username: string) {
    // پیاده‌سازی جستجو در پایگاه داده
   var user=await this.usersService.findByUsername(username);
   if(user)
    return user;
return null;
  }

  async generateToken(user: any): Promise<string> {
    const payload = { username: user.username, sub: user.id }; // داده‌های توکن
    return this.jwtService.sign(payload);
  }
}
