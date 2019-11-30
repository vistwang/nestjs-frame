import { Module } from '@nestjs/common';

import { SyncinfoController } from './syncinfo.controller';
import { SyncinfoService } from './syncinfo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { syncinfoChema } from './syncinfo.schema';

@Module({
  controllers: [SyncinfoController],
  imports: [
    MongooseModule.forFeature([{ name: 'Syncinfo', schema: syncinfoChema}]), // collection: 'Blocks'
  ],
  providers: [SyncinfoService],
})
export class SyncinfoModule {}
