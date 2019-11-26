import { Test, TestingModule } from '@nestjs/testing';
import { SyncinfoService } from './syncinfo.service';

describe('SyncinfoService', () => {
  let service: SyncinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SyncinfoService],
    }).compile();

    service = module.get<SyncinfoService>(SyncinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
