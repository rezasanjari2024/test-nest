// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/dto/user/user.dto';
import { plainToClass } from 'class-transformer';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}


  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }


  async create(user: Partial<User>): Promise<UserDto> {
    user.password = await bcrypt.hash(user.password, 10);
    const newUser = this.userRepository.create(user);
    var result= this.userRepository.save(newUser);
    var user1=plainToClass(UserDto,result);
    return user1;
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOneBy({ id });
  }
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
  async findByUsername(username: string): Promise<User> {
    return await this.userRepository.findOne({ where: { UserName:username } });
  }
}
