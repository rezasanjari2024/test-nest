import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { privateDecrypt } from 'crypto';
import { CreateApprovalDto } from 'src/dto/approval/create-approval.dto';
import { GetApprovalDto } from 'src/dto/approval/get-approval.dto';
import { Approval } from 'src/entities/approval.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApprovalService {
    constructor(
      @InjectRepository(Approval)
      private readonly ApprovalRepository:Repository<Approval>
    ){}
  async  create(userId : number,createDto:CreateApprovalDto){
     var approval=plainToInstance(Approval,createDto);
     approval.UserId=userId;
     const newApproval=await this.ApprovalRepository.save(approval);
     
  
  
      return plainToInstance(GetApprovalDto,newApproval);
    }


     async findAll( userId: number): Promise<GetApprovalDto[]> {
        const accounts = await this.ApprovalRepository.find({ where: { UserId:userId }, relations: { Strategies: true } });
        return plainToInstance(GetApprovalDto,accounts)
        //accounts.map(account => plainToInstance(GetAccountDto, account)); یک نمونه مپ کردن
      }

}
