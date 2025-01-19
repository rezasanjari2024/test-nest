import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { UserId } from 'src/helper/decorators/userId.decorator';
import { CreateApprovalDto } from 'src/dto/approval/create-approval.dto';
import { GetApprovalDto } from 'src/dto/approval/get-approval.dto';
import { CustomException } from 'src/helper/filters/customException.filter';
import { ApprovalService } from './approval.service';

@Controller('approval')
@ApiTags('approvals')
@UseGuards(JwtGuard)
@ApiBearerAuth()
export class ApprovalController {
    constructor(
        private readonly approvalService:ApprovalService
    ){}

    @Post()
      @ApiBody({ type: CreateApprovalDto })
     async create(@UserId() userId:number,@Body() createAccountDto: CreateApprovalDto): Promise<GetApprovalDto | CustomException> {
 
      if (!userId) {
      return new CustomException('ایدی کاربر در توکن وجود ندارد',404);
      }
    
        return await this.approvalService.create(userId,createAccountDto);
      }
    
      @Get()
     async findAll(@UserId() userId:number):Promise<GetApprovalDto[]> {
        return await this.approvalService.findAll(userId);
      }
}
