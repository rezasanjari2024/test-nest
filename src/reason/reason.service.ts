import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass, plainToInstance } from 'class-transformer';
import { CreateReasonDto } from 'src/dto/reason/create-reason.dto';
import { ReasonDto } from 'src/dto/reason/reason.dto';
import { Reason } from 'src/entities/Reason.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReasonService {
  
     constructor(
        @InjectRepository(Reason)
        private readonly reasonRepository: Repository<Reason>,  
      ) {}

      async create (userId:number,reasonDto:CreateReasonDto){
        var reason:Reason=plainToClass(Reason,reasonDto);
        
        

       var result= await this.reasonRepository.save(reason);
        return await this.find(result.id)


      }
      async findAll():Promise<ReasonDto[]>{
        var reasons=await this.reasonRepository.find();
        var reasonsDto=plainToInstance(ReasonDto,reasons);
        return reasonsDto;
      }
      async find(id:number):Promise<ReasonDto>{
        var reason=await this.reasonRepository.findOne({where:{id}});
        var reasonDto=plainToInstance(ReasonDto,reason);
        return reasonDto;
      }
}
