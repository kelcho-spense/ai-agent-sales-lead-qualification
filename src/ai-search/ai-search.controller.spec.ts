import { Test, TestingModule } from '@nestjs/testing';
import { AiSearchController } from './ai-search.controller';
import { AiSearchService } from './ai-search.service';

describe('AiSearchController', () => {
  let controller: AiSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AiSearchController],
      providers: [AiSearchService],
    }).compile();

    controller = module.get<AiSearchController>(AiSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
