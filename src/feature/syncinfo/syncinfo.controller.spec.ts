import { Test, TestingModule } from '@nestjs/testing';
import { SyncinfoController } from './syncinfo.controller';

describe('Syncinfo Controller', () => {
  let controller: SyncinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SyncinfoController],
    }).compile();

    controller = module.get<SyncinfoController>(SyncinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
