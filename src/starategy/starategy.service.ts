import { Injectable } from '@nestjs/common';
import { CreateStarategyDto } from 'src/dto/create-starategy.dto';
import { UpdateStarategyDto } from 'src/dto/update-starategy.dto';


@Injectable()
export class StarategyService {
  create(createStarategyDto: CreateStarategyDto) {
    return 'This action adds a new starategy';
  }

  findAll() {
    return `This action returns all starategy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} starategy`;
  }

  update(id: number, updateStarategyDto: UpdateStarategyDto) {
    return `This action updates a #${id} starategy`;
  }

  remove(id: number) {
    return `This action removes a #${id} starategy`;
  }
}
