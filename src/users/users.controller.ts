// src/users/users.controller.ts
import { Controller, Get, Post, Body, Param, Delete, ConflictException, UseGuards, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/dto/user/user.dto';
import { plainToClass } from 'class-transformer';
import { JwtAuthGuard } from 'src/auth/local-auth.guard/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth/local.strategy/jwt.strategy';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { CustomException } from 'src/helper/filters/customException.filter';
import { RigisterDto } from 'src/dto/user/rigister.sto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // مسیر برای دریافت همه کاربران
  @Get()
    @UseGuards(JwtGuard)
    @ApiBearerAuth()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // مسیر برای اضافه کردن کاربر جدید
  @Post()
  async create(@Body() userDto: RigisterDto): Promise<UserDto> {

    const existingUser = await this.usersService.findByUsername(userDto.UserName );
    if (existingUser) {
      throw new CustomException('این نام کاربری قبلاً ثبت شده است.',409);
    }
    var user=plainToClass(User,userDto);
     var result =await this.usersService.create(user);
     
      return result;
  }

  // مسیر برای پیدا کردن یک کاربر بر اساس id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  // مسیر برای حذف یک کاربر
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
