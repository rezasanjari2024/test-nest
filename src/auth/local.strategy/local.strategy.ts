

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { CustomException } from 'src/helper/filters/customException.filter';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService
    
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('user not found');
    const user = await this.authService.validateUser(username, password);
    if (!user) {
    
      
      throw new CustomException("نام کاربری یا رمز عبور اشتباه است",401);
    }
    return user;
  }
}

