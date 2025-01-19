import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { StrategyController } from './strategy.controller';
import { StrategyService } from './strategy.service';
import { Strategy } from 'src/entities/strategy.entity';

@Module({
   imports: [TypeOrmModule.forFeature([Strategy])],
  controllers: [StrategyController],
  providers: [StrategyService]
})
export class StrategyModule {}
