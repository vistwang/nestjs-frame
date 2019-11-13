import { Module } from '@nestjs/common';

import { BaseService } from './base/base.service';

// 共享模块（共享mongodb、redis封装服务、通用服务）
@Module({
  providers: [BaseService],
})
export class SharedModule {}
