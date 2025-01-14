import { Module } from '@nestjs/common';
import { ReasonService } from './reason.service';
import { ReasonController } from './reason.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reason } from 'src/entities/Reason.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Reason])],
  providers: [ReasonService],
  controllers: [ReasonController]
})
export class ReasonModule {}
