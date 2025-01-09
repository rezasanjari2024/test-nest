import { Controller, Post, UseGuards, Body, Get,Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard/local-auth.guard';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto } from 'src/dto/user/login.dto';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { get } from 'http';

import { JwtGuard } from './guards/jwt.guard';
import { Request } from 'express';


@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userservice: UsersService,

  ) {}

   @Post('login')
   @UseGuards(LocalGuard) // استفاده از گارد
  @ApiBody({ type: LoginDto })
  async login(@Body() userAuth:LoginDto): Promise<any> {

    return this.authService.login(userAuth.username,userAuth.password );
  }

  @Get('status')
  @UseGuards(JwtGuard)
  statues(@Req() req:Request) {
    console.log(req.user);
    return req.user;
    
  }

}
