import { Module } from '@nestjs/common';
import { JornalService } from './jornal.service';
import { JornalController } from './jornal.controller';

@Module({
  controllers: [JornalController],
  providers: [JornalService]
})
export class JornalModule {}
