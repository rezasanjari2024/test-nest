import { Module } from '@nestjs/common';
import { StarategyService } from './starategy.service';
import { StarategyController } from './starategy.controller';
import { Starategy } from 'src/entities/starategy.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports: [TypeOrmModule.forFeature([Starategy])],
  controllers: [StarategyController],
  providers: [StarategyService]
})
export class StarategyModule {}
