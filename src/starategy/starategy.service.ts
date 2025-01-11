import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Strategy } from 'passport-jwt';
import { find } from 'rxjs';
import { CreateAccountDto } from 'src/dto/account/create-account.dto';
import { CreateStarategyDto } from 'src/dto/strategy/create-starategy.dto';
import { GetStarategyDto } from 'src/dto/strategy/get-strategy.dto';
import { UpdateStarategyDto } from 'src/dto/strategy/update-starategy.dto';
import { Starategy } from 'src/entities/starategy.entity';
import { Repository } from 'typeorm';


@Injectable()
export class StarategyService {
  constructor(
    @InjectRepository(Starategy)
     private readonly starategyRepository: Repository<Starategy>,
  ) {}
  async create(createStarategyDto: CreateStarategyDto): Promise<Starategy> {
    var starategy=plainToClass(Starategy,createStarategyDto);
    var result =await this.starategyRepository.save(starategy);
    return result;
  }

 async findAll(userId:number) :Promise<Starategy[]>{
 var result=await this.starategyRepository.find({relations:['User'],where:{User:{id:userId}}});
  return result;
  }

  async findOne(id: number):Promise<GetStarategyDto> {
    const startegy= await this.starategyRepository.findOne({where:{id},relations:['User']});
    const startegyDto=plainToClass(GetStarategyDto,startegy);
    return startegyDto;
  }

 async update(updateStarategyDto: UpdateStarategyDto):Promise<GetStarategyDto> {
    const {id, ...starategy}=plainToClass(Starategy,updateStarategyDto);
    var result =await this.starategyRepository.update({id:id},starategy);
    var starategyDto=await this.findOne(id);
    return starategyDto;
  }

  async remove(id: number) {
   var strategy=await this.starategyRepository.delete(id);
  }
}
