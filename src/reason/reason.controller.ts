
import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ReasonService } from './reason.service';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ReasonDto } from 'src/dto/reason/reason.dto';
import { CreateReasonDto } from 'src/dto/reason/create-reason.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { UserId } from 'src/helper/decorators/userId.decorator';
import { CustomException } from 'src/helper/filters/customException.filter';


@Controller('reason')
@ApiBearerAuth()
@ApiTags("reasons")
@UseGuards(JwtGuard)
export class ReasonController {
    constructor(private readonly reasonService: ReasonService) {}

    @Post()
   async create(@UserId() userId:number,@Body() createReasonDto: CreateReasonDto):Promise<ReasonDto|CustomException> {

     if (!userId) {
      return new CustomException('ایدی کاربر در توکن وجود ندارد',404);
      }
        const result=await this.reasonService.create(userId,createReasonDto);
        return result;
    }

    @Get()
    findAll() {
        return this.reasonService.findAll();
    }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.reasonService.findOne(+id);
    // }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateReasonDto: UpdateReasonDto) {
    //     return this.reasonService.update(+id, updateReasonDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.reasonService.remove(+id);
    // }
}