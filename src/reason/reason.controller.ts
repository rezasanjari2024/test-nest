
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ReasonService } from './reason.service';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ReasonDto } from 'src/dto/reason/reason.dto';
import { CreateReasonDto } from 'src/dto/reason/create-reason.dto';


@Controller('reason')
@ApiBearerAuth()
@ApiTags("reasons")
export class ReasonController {
    constructor(private readonly reasonService: ReasonService) {}

    @Post()
   async create(@Body() createReasonDto: CreateReasonDto):Promise<ReasonDto> {

        const result=await this.reasonService.create(createReasonDto);
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