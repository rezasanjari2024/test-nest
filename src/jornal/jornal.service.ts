import { Injectable } from '@nestjs/common';
import { CreateJornalDto } from '../dto/create-jornal.dto';
import { UpdateJornalDto } from '../dto/update-jornal.dto';

@Injectable()
export class JornalService {
  create(createJornalDto: CreateJornalDto) {
    return 'This action adds a new jornal';
  }

  findAll() {
    return `This action returns all jornal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jornal`;
  }

  update(id: number, updateJornalDto: UpdateJornalDto) {
    return `This action updates a #${id} jornal`;
  }

  remove(id: number) {
    return `This action removes a #${id} jornal`;
  }
}
