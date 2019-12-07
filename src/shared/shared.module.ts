import { Module } from '@nestjs/common';

import { WebsockesModule } from './websockes/websockes.module';

// 共享模块（共享mongodb、redis封装服务、通用服务）
@Module({
  providers: [],
  imports: [WebsockesModule],
})
export class SharedModule {}
