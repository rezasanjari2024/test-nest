import { PartialType } from '@nestjs/mapped-types';
import { CreateJornalDto } from './create-jornal.dto';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateJornalDto extends PartialType(CreateJornalDto) {
    @ApiProperty()
    id:number
}
