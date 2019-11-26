import { Module } from '@nestjs/common';

import { BlocksModule } from './blocks/blocks.module';
import { SyncinfoModule } from './syncinfo/syncinfo.module';
import { TransactionsModule } from './transactions/transactions.module';

// 特性模块（主要业务模块）
@Module({
  imports: [BlocksModule, TransactionsModule, SyncinfoModule],
})
export class FeatureModule {}
