import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Put } from '@nestjs/common';
import { StarategyService } from './starategy.service';
import { CreateStarategyDto } from 'src/dto/strategy/create-starategy.dto';
import { UpdateStarategyDto } from 'src/dto/strategy/update-starategy.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

import { plainToClass, plainToInstance } from 'class-transformer';
import { Request } from 'express';
import { CustomException } from 'src/filters/customException.filter';
import { GetStarategyDto } from 'src/dto/strategy/get-strategy.dto';



@Controller('starategy')
@ApiTags('starategy')
 @ApiBearerAuth()
@UseGuards(JwtGuard)
export class StarategyController {
  constructor(private readonly starategyService: StarategyService) {}

  @Post()
  async create(@Body() createStarategyDto: CreateStarategyDto) :Promise<CreateStarategyDto> {
    var result =await this.starategyService.create(createStarategyDto);
    var starategyDto=plainToClass(CreateStarategyDto,result);
    return starategyDto;

  }

  @Get()
async findAll(@Req() req:Request):Promise<GetStarategyDto[]|CustomException>{ 
const  user:any=req.user;

if(!user && !user.userId) 
  {
  return new CustomException('user not found',404);
}
    var starategies=await this.starategyService.findAll(user.userId);
    console.log(starategies);
    var starategiesDto:GetStarategyDto[]=plainToInstance(GetStarategyDto,starategies,{
      excludeExtraneousValues: true, // فقط فیلدهای @Expose به خروجی منتقل می‌شوند
    });
    
    return starategiesDto;
}
  

  @Get(':id')
 async findOne(@Param('id') id: string):Promise<GetStarategyDto> {
    return this.starategyService.findOne(+id);
  }

  @Put()
 async update(  @Body() updateStarategyDto: UpdateStarategyDto) {
    return await this.starategyService.update( updateStarategyDto);
  }

  @Delete(':id')
 async remove(@Param('id') id: string) {
    return await this.starategyService.remove(+id);
  }
}
