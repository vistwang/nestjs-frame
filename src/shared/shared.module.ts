import { Module } from '@nestjs/common';

import { WebsockesModule } from './websockes/websockes.module';
import { MongodbModule } from './mongodb/mongodb.module';

// 共享模块（共享mongodb、redis封装服务、通用服务）
@Module({
  providers: [],
  imports: [WebsockesModule, MongodbModule],
})
export class SharedModule {}
