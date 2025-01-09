import { Test, TestingModule } from '@nestjs/testing';
import { StarategyController } from './starategy.controller';
import { StarategyService } from './starategy.service';

describe('StarategyController', () => {
  let controller: StarategyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StarategyController],
      providers: [StarategyService],
    }).compile();

    controller = module.get<StarategyController>(StarategyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
