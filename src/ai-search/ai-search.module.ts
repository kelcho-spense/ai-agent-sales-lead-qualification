import { Module } from '@nestjs/common';
import { AiSearchService } from './ai-search.service';
import { AiSearchController } from './ai-search.controller';

@Module({
  controllers: [AiSearchController],
  providers: [AiSearchService],
})
export class AiSearchModule {}
