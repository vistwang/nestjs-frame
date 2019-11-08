import { Module } from '@nestjs/common';
import { BaseService } from './base/base.service';
import { MongodbModule } from './mongodb/mongodb.module';

// 共享模块（共享mongodb、redis封装服务、通用服务）
@Module({
  providers: [BaseService],
  imports: [MongodbModule]
})
export class SharedModule {}
