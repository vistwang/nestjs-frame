import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';

// 特性模块（主要业务模块）
@Module({
  imports: [UsersModule],
})

export class FeatureModule {}
