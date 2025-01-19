import { Injectable } from '@nestjs/common';
import { CreateJornalDto } from '../dto/jornal/create-jornal.dto';

import { In, Repository } from 'typeorm';
import { Jornal } from 'src/entities/jornal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { GetJornalDto } from 'src/dto/jornal/get-jornal.dto';
import { UpdateJornalDto } from 'src/dto/jornal/update-jornal.dto';
import { Approval } from 'src/entities/approval.entity';
import { Reason } from 'src/entities/Reason.entity';
import { GetAccountDto } from 'src/dto/account/get-account.dto';
import { CustomException } from 'src/helper/filters/customException.filter';

@Injectable()
export class JornalService
 {
  constructor(
    @InjectRepository(Jornal)
    private readonly jornalRepository:Repository<Jornal>,
    @InjectRepository(Approval)
    private readonly approvalRepository:Repository<Approval>,
    @InjectRepository(Reason)
    private readonly reasonRepository:Repository<Reason>,
  ){}
async  create(userId:number,createJornalDto: CreateJornalDto){
  const queryRunner = this. jornalRepository.manager.connection.createQueryRunner();

  // شروع تراکنش
  await queryRunner.startTransaction();
  try {
    
    const jornal=plainToInstance(Jornal,createJornalDto);
    const approvalIds =createJornalDto.Approvals; 
    const reasonIds =createJornalDto.Reasons; 
    jornal.UserId=userId;
    jornal.Fee=1;

   
    const newJornal=this.jornalRepository.create(jornal);
    await queryRunner.manager.save(newJornal); // ذخیره ژورنال در تراکنش
 
    const approvals = await this.approvalRepository.find({where:{id:In(approvalIds)}});
    const reasons = await this.reasonRepository.find({where:{id:In(reasonIds)}});
    jornal.Approvals =approvals;
    jornal.Reasons = reasons

    await queryRunner.manager.save(jornal); 
   
    await queryRunner.commitTransaction();
     return plainToInstance(GetJornalDto,newJornal);

  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw error; // خطا را مجدداً پرتاب می‌کنیم
  }
  finally{
    await queryRunner.release();
  }

  }

 async findAll( userId: number): Promise<GetJornalDto[]> {
        const journals = await this.jornalRepository.find({ where: { UserId:userId }, relations: { Approvals: true,Reasons:true }, order:{id:'DESC'}});
        return plainToInstance(GetJornalDto,journals)
        //accounts.map(account => plainToInstance(GetAccountDto, account)); یک نمونه مپ کردن
      }

 async findOne(id: number): Promise<GetJornalDto> {
    const journal = await this.jornalRepository.findOne({where:{id}});
    const journalDto = plainToInstance(GetJornalDto, journal);
    return journalDto;
  }

  
    async update(userId: number, updateJornalDto: UpdateJornalDto): Promise<GetJornalDto> {
      
      const id =updateJornalDto.id;
      const journalDto = await this.findOne(id);

      if (!journalDto || journalDto.UserId !== userId) {
        throw new CustomException('شما مجوز به اپدیت حساب فرد دیگری نیستید.', 403);
      }
      const journal=plainToInstance(Jornal,updateJornalDto)
      await this.jornalRepository.update(journalDto.id, journal);
      const updatedJournal = await this.findOne(journal.id);
      return updatedJournal;
    }
 


 async remove(userId:number,id: number) {
    const journalDtoDto =await  this.findOne(id);

    if (!journalDtoDto || journalDtoDto.UserId !== userId) {
      throw new CustomException('شما مجوز به حذف حساب فرد دیگری نیستید.', 403);
    }
    return this.jornalRepository.delete(id);
  }
}
