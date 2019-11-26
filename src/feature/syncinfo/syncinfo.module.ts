import { Module } from '@nestjs/common';

import { SyncinfoController } from './syncinfo.controller';
import { SyncinfoService } from './syncinfo.service';

@Module({
  controllers: [SyncinfoController],
  providers: [SyncinfoService],
})
export class SyncinfoModule {}
