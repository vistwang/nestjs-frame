import { Module } from '@nestjs/common';
import { StakingController } from './staking.controller';
import { StakingService } from './staking.service';

@Module({
  controllers: [StakingController],
  providers: [StakingService],
})
export class StakingModule {}
