import { Injectable } from '@nestjs/common';
import { CreateAiSearchDto } from './dto/create-ai-search.dto';
import { UpdateAiSearchDto } from './dto/update-ai-search.dto';

@Injectable()
export class AiSearchService {
  create(createAiSearchDto: CreateAiSearchDto) {
    return 'This action adds a new aiSearch';
  }

  findAll() {
    return `This action returns all aiSearch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aiSearch`;
  }

  update(id: number, updateAiSearchDto: UpdateAiSearchDto) {
    return `This action updates a #${id} aiSearch`;
  }

  remove(id: number) {
    return `This action removes a #${id} aiSearch`;
  }
}
