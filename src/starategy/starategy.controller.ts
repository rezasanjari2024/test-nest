import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StarategyService } from './starategy.service';
import { CreateStarategyDto } from 'src/dto/create-starategy.dto';
import { UpdateStarategyDto } from 'src/dto/update-starategy.dto';
import { ApiTags } from '@nestjs/swagger';


@Controller('starategy')
@ApiTags('starategy')
export class StarategyController {
  constructor(private readonly starategyService: StarategyService) {}

  @Post()
  create(@Body() createStarategyDto: CreateStarategyDto) {
    return this.starategyService.create(createStarategyDto);
  }

  @Get()
  findAll() {
    return this.starategyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.starategyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStarategyDto: UpdateStarategyDto) {
    return this.starategyService.update(+id, updateStarategyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.starategyService.remove(+id);
  }
}
