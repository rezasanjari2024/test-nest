import { Module } from '@nestjs/common';
import { StarategyService } from './starategy.service';
import { StarategyController } from './starategy.controller';

@Module({
  controllers: [StarategyController],
  providers: [StarategyService]
})
export class StarategyModule {}
