import { Test, TestingModule } from '@nestjs/testing';
import { JornalService } from './jornal.service';

describe('JornalService', () => {
  let service: JornalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JornalService],
    }).compile();

    service = module.get<JornalService>(JornalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
