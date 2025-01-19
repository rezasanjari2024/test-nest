import { PartialType } from '@nestjs/mapped-types';
import { CreateStarategyDto } from './create-starategy.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStarategyDto extends PartialType(CreateStarategyDto) {
    @ApiProperty()
    id:number;
}
