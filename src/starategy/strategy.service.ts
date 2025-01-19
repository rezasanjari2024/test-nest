import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass, plainToInstance } from 'class-transformer';

import { find } from 'rxjs';
import { CreateAccountDto } from 'src/dto/account/create-account.dto';
import { CreateStarategyDto } from 'src/dto/strategy/create-starategy.dto';
import { GetStarategyDto } from 'src/dto/strategy/get-strategy.dto';
import { UpdateStarategyDto } from 'src/dto/strategy/update-starategy.dto';
import { Strategy } from 'src/entities/strategy.entity';
import { Repository } from 'typeorm';


@Injectable()
export class StrategyService {
  constructor(
    @InjectRepository(Strategy)
     private readonly strategyRepository: Repository<Strategy>,
  ) {}
  async create(userId:number,createStarategyDto: CreateStarategyDto): Promise<Strategy> {
    var starategy=plainToClass(Strategy,createStarategyDto);
    starategy.UserId=userId;
    var result =await this.strategyRepository.save(starategy);
    return result;
  }

 async findAll(userId:number) :Promise<Strategy[]>{
 var result=await this.strategyRepository.find({where:{UserId:userId}});
  return result;
  }

  async findOne(id: number):Promise<GetStarategyDto> {
    const startegy= await this.strategyRepository.findOne({where:{id}});
    const startegyDto=plainToClass(GetStarategyDto,startegy);
    return startegyDto;
  }

 async update(updateStarategyDto: UpdateStarategyDto):Promise<GetStarategyDto> {
    const {id, ...starategy}=plainToInstance(Strategy,updateStarategyDto);
    var result =await this.strategyRepository.update({id:id},starategy);
    var starategyDto=await this.findOne(id);
    return starategyDto;
  }

  async remove(id: number) {
   var strategy=await this.strategyRepository.delete(id);
  }
}
