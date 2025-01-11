import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from '../dto/account/create-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/entities/account.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { GetAccountDto } from 'src/dto/account/get-account.dto';
import { UpdateAccountDto } from 'src/dto/account/update-account.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,  
  ) {}
 async create(createAccountDto: CreateAccountDto) : Promise<GetAccountDto> {
    var account = plainToClass(Account, createAccountDto);
    var result = await this.accountRepository.save(account);
    const accountDto =  await this.findOne(result.id);
    
    return accountDto;
  }

  findAll() {
    return `This action returns all account`;
  }

 async findOne(id: number): Promise<GetAccountDto> {
    const account = await this.accountRepository.findOne({where:{id},relations:['UserId']});
    const accountDto = plainToClass(GetAccountDto, account);
    return accountDto;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
