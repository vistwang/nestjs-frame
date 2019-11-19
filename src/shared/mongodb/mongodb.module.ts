import { Module } from '@nestjs/common';

import { databaseProviders } from './mongodb.providers';
import { MongodbService } from './mongodb.service';

@Module({
  providers: [MongodbService, ...databaseProviders],
  exports: [...databaseProviders],
})
export class MongodbModule {}
