import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Put } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from '../dto/account/create-account.dto';

import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateAccountDto } from '../dto/account/update-account.dto';
import { GetAccountDto } from '../dto/account/get-account.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

import { Request } from 'express';
import { CustomException } from '../helper/filters/customException.filter';
import { UserId } from '../helper/decorators/userId.decorator';

@Controller('account')
@ApiTags('accounts')
@UseGuards(JwtGuard)
@ApiBearerAuth()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  @ApiBody({ type: CreateAccountDto })
 async create(@UserId() userId:number,@Body() createAccountDto: CreateAccountDto): Promise<GetAccountDto | CustomException> {
  
  
  if (!userId) {
  return new CustomException('ایدی کاربر در توکن وجود ندارد',404);
  }

    return await this.accountService.create(userId,createAccountDto);
  }

  @Get()
 async findAll(@UserId() userId:number):Promise<GetAccountDto[]> {
    return await this.accountService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne(+id);
  }

  @Put()
  update(@UserId() UserId:number, @Body() updateAccountDto: UpdateAccountDto) {

    
    return this.accountService.update(UserId, updateAccountDto);
  }

  @Delete(':id')
  remove(@UserId() UserId:number,@Param('id') id: string) {
    return this.accountService.remove(UserId,+id);
  }
}
