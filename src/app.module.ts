import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsModule } from './leads/leads.module';
import { AiSearchModule } from './ai-search/ai-search.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LeadsModule, AiSearchModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
