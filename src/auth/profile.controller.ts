import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './local-auth.guard/jwt-auth.guard';

@Controller('profile') 
 @UseGuards(JwtAuthGuard)
export class ProfileController {

  @Get()
  getProfile() {
    return { message: 'Protected route' };
  }
}
