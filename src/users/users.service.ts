// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // متد برای دریافت تمام کاربران
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // متد برای ایجاد کاربر جدید
  async create(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  // متد برای پیدا کردن یک کاربر با id
  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  // متد برای حذف یک کاربر
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
