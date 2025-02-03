import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AiSearchService } from './ai-search.service';
import { CreateAiSearchDto } from './dto/create-ai-search.dto';
import { UpdateAiSearchDto } from './dto/update-ai-search.dto';

@Controller('ai-search')
export class AiSearchController {
  constructor(private readonly aiSearchService: AiSearchService) {}

  @Post()
  create(@Body() createAiSearchDto: CreateAiSearchDto) {
    return this.aiSearchService.create(createAiSearchDto);
  }

  @Get()
  findAll() {
    return this.aiSearchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aiSearchService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAiSearchDto: UpdateAiSearchDto,
  ) {
    return this.aiSearchService.update(+id, updateAiSearchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aiSearchService.remove(+id);
  }
}
