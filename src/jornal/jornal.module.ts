import { Module } from '@nestjs/common';
import { JornalService } from './jornal.service';
import { JornalController } from './jornal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jornal } from 'src/entities/jornal.entity';
import { Approval } from 'src/entities/approval.entity';
import { Reason } from 'src/entities/Reason.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jornal,Approval,Reason])],
  controllers: [JornalController],
  providers: [JornalService]
})
export class JornalModule {}
