import { PartialType } from '@nestjs/mapped-types';
import { CreateJornalDto } from './create-jornal.dto';

export class UpdateJornalDto extends PartialType(CreateJornalDto) {}
