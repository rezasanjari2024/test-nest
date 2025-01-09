import { Test, TestingModule } from '@nestjs/testing';
import { StarategyService } from './starategy.service';

describe('StarategyService', () => {
  let service: StarategyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarategyService],
    }).compile();

    service = module.get<StarategyService>(StarategyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
