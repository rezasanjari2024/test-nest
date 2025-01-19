import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from '../dto/account/create-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from '../entities/account.entity';
import { Repository } from 'typeorm';
import { plainToClass, plainToInstance } from 'class-transformer';
import { GetAccountDto } from '../dto/account/get-account.dto';
import { UpdateAccountDto } from '../dto/account/update-account.dto';
import { UserId } from '../helper/decorators/userId.decorator';
import { CustomException } from 'src/helper/filters/customException.filter';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,  
  ) {}
 async create(userId:number,createAccountDto: CreateAccountDto) : Promise<GetAccountDto> {
    var account = plainToClass(Account, createAccountDto);
    account.UserId=userId;
    var result = await this.accountRepository.save(account);
    const accountDto =  await this.findOne(result.id);
    
    return accountDto;
  }

 async findAll( userId: number): Promise<GetAccountDto[]> {
    const accounts = await this.accountRepository.find({ where: { UserId:userId } });
    return plainToInstance(GetAccountDto,accounts)
    //accounts.map(account => plainToInstance(GetAccountDto, account)); یک نمونه مپ کردن
  }

 async findOne(id: number): Promise<GetAccountDto> {
    const account = await this.accountRepository.findOne({where:{id}});
    const accountDto = plainToClass(GetAccountDto, account);
    return accountDto;
  }

  
    async update(userId: number, updateAccountDto: UpdateAccountDto): Promise<GetAccountDto> {
      
      const id =updateAccountDto.id;
      const accountDto = await this.findOne(id);

      if (!accountDto || accountDto.UserId !== userId) {
        throw new CustomException('شما مجوز به اپدیت حساب فرد دیگری نیستید.', 403);
      }
      const account=plainToInstance(Account,updateAccountDto)
      await this.accountRepository.update(account.id, account);
      const updatedAccount = await this.findOne(account.id);
      return updatedAccount;
    }
 


 async remove(userId:number,id: number) {
    const accountDto =await  this.findOne(id);

    if (!accountDto || accountDto.UserId !== userId) {
      throw new CustomException('شما مجوز به حذف حساب فرد دیگری نیستید.', 403);
    }
    return this.accountRepository.delete(id);
  }
}
