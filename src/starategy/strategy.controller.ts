import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Put } from '@nestjs/common';

import { CreateStarategyDto } from 'src/dto/strategy/create-starategy.dto';
import { UpdateStarategyDto } from 'src/dto/strategy/update-starategy.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

import { plainToClass, plainToInstance } from 'class-transformer';
import { Request } from 'express';
import { CustomException } from 'src/helper/filters/customException.filter';
import { GetStarategyDto } from 'src/dto/strategy/get-strategy.dto';
import { UserId } from 'src/helper/decorators/userId.decorator';
import { StrategyService } from './strategy.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy } from 'src/entities/strategy.entity';



@Controller('starategy')
@ApiTags('starategy')
 @ApiBearerAuth()
@UseGuards(JwtGuard)
export class StrategyController {
  
  constructor(private readonly strategyService: StrategyService) {}

  @Post()
  async create(@UserId() UserId:number,@Body() createStarategyDto: CreateStarategyDto) :Promise<CreateStarategyDto|CustomException> {
    if (!UserId) {
      return new CustomException('نام کاربری در توکن وجود ندارد',404);
      }
     
    var result =await this.strategyService.create(UserId,createStarategyDto);
    var starategyDto=plainToInstance(CreateStarategyDto,result);
    return starategyDto;

  }

  @Get()
async findAll(@UserId() userId:number,@Req() req:Request):Promise<GetStarategyDto[]|CustomException>{ 


if(!userId) 
  {
  return new CustomException('user not found',404);
}
    var starategies=await this.strategyService.findAll(userId);
   
    var strategiesDto:GetStarategyDto[]=plainToInstance(GetStarategyDto,starategies,{
      excludeExtraneousValues: true, // فقط فیلدهای @Expose به خروجی منتقل می‌شوند
    });
    
    return strategiesDto;
}
  

  @Get(':id')
 async findOne(@Param('id') id: string,@Req() req:Request):Promise<GetStarategyDto> {
  console.log("userid",req.userId);
  
    return this.strategyService.findOne(+id);
  }

  @Put()
 async update(  @Body() updateStarategyDto: UpdateStarategyDto) {
    return await this.strategyService.update( updateStarategyDto);
  }

  @Delete(':id')
 async remove(@Param('id') id: string) {
    return await this.strategyService.remove(+id);
  }
}
