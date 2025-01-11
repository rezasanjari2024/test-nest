import { PartialType } from '@nestjs/mapped-types';
import { CreateStarategyDto } from './create-starategy.dto';

export class UpdateStarategyDto extends PartialType(CreateStarategyDto) {}
