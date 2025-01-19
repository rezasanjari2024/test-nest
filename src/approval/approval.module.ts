import { Module } from '@nestjs/common';
import { ApprovalService } from './approval.service';
import { ApprovalController } from './approval.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Approval } from 'src/entities/approval.entity';

@Module({
imports:[TypeOrmModule.forFeature([Approval])],
  providers: [ApprovalService],
  controllers: [ApprovalController]
})
export class ApprovalModule {}
