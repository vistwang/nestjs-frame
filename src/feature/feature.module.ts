import { Module } from '@nestjs/common';

import { BlocksModule } from './blocks/blocks.module';
import { SyncinfoModule } from './syncinfo/syncinfo.module';
import { TransactionsModule } from './transactions/transactions.module';
import { UsersModule } from './users/users.module';
import { StakingModule } from './staking/staking.module';

// 特性模块（主要业务模块）
@Module({
  imports: [UsersModule, BlocksModule, TransactionsModule, SyncinfoModule, StakingModule],
})

export class FeatureModule {}
