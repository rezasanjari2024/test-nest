import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { JornalService } from './jornal.service';
import { CreateJornalDto } from '../dto/jornal/create-jornal.dto';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserId } from 'src/helper/decorators/userId.decorator';
import { CustomException } from 'src/helper/filters/customException.filter';
import { UpdateJornalDto } from 'src/dto/jornal/update-jornal.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('jornal')
@ApiTags('jornal')
@ApiBearerAuth()
@UseGuards(JwtGuard)
export class JornalController {
  constructor(private readonly jornalService: JornalService) {}

  @Post()
  create(@UserId() userId:number,@Body() createJornalDto: CreateJornalDto) {
    if (!userId) {
      return new CustomException('user not found',404);
      }
      
    return this.jornalService.create(userId,createJornalDto);
  }

  @Get()
  findAll(@UserId() userId:number) {
    return this.jornalService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jornalService.findOne(+id);
  }

  @Put()
  update(@UserId() UserId: number, @Body() updateJornalDto: UpdateJornalDto) {
    return this.jornalService.update(UserId, updateJornalDto);
  }

  @Delete(':id')
  remove(@UserId() userId:number,@Param('id') id: string) {
    return this.jornalService.remove(userId,+id);
  }
}
