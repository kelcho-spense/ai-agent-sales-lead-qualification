import { PartialType } from '@nestjs/mapped-types';
import { CreateAiSearchDto } from './create-ai-search.dto';

export class UpdateAiSearchDto extends PartialType(CreateAiSearchDto) {}
