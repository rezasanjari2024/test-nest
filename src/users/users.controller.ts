// src/users/users.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // مسیر برای دریافت همه کاربران
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // مسیر برای اضافه کردن کاربر جدید
  @Post()
  async create(@Body() user: Partial<User>): Promise<User> {
    return this.usersService.create(user);
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
