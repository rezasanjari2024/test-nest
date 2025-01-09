import { Test, TestingModule } from '@nestjs/testing';
import { JornalController } from './jornal.controller';
import { JornalService } from './jornal.service';

describe('JornalController', () => {
  let controller: JornalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JornalController],
      providers: [JornalService],
    }).compile();

    controller = module.get<JornalController>(JornalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
