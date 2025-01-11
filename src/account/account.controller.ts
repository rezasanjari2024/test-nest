import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from '../dto/account/create-account.dto';

import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateAccountDto } from 'src/dto/account/update-account.dto';
import { GetAccountDto } from 'src/dto/account/get-account.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { Request } from 'express';
import { CustomException } from 'src/filters/customException.filter';

@Controller('account')
@ApiTags('account')
@UseGuards(JwtGuard)
@ApiBearerAuth()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  @ApiBody({ type: CreateAccountDto })
 async create(@Req() req:Request,@Body() createAccountDto: CreateAccountDto): Promise<GetAccountDto | CustomException> {
  var user:any=req.user;
  if (user && user.userId) {
    createAccountDto.UserId=user.userId;
  }else{
    return new CustomException('user not found',404);
  }
    return await this.accountService.create(createAccountDto);
  }

  @Get()
  findAll() {
    return this.accountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.remove(+id);
  }
}
