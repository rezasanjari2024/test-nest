import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JornalService } from './jornal.service';
import { CreateJornalDto } from '../dto/create-jornal.dto';
import { UpdateJornalDto } from '../dto/update-jornal.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('jornal')
@ApiTags('jornal')
export class JornalController {
  constructor(private readonly jornalService: JornalService) {}

  @Post()
  create(@Body() createJornalDto: CreateJornalDto) {
    return this.jornalService.create(createJornalDto);
  }

  @Get()
  findAll() {
    return this.jornalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jornalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJornalDto: UpdateJornalDto) {
    return this.jornalService.update(+id, updateJornalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jornalService.remove(+id);
  }
}
