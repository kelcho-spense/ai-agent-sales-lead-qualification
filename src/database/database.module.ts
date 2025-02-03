import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { MyLoggerModule } from 'src/my-logger/my-logger.module';
import { ConfigModule } from '@nestjs/config';
import { AppService } from 'src/app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MyLoggerModule,
  ],
  providers: [DatabaseService, AppService],
  exports: [DatabaseService, AppService],
})
export class DatabaseModule {}
