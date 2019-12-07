import { Controller, Get, Param } from '@nestjs/common';
import { StakingCallback } from './interfaces/staking.interfaces';
import { StakingService } from './staking.service';

@Controller('staking')
export class StakingController {
    constructor(private stakingService: StakingService) {}
    @Get(':adddress')
    async findAddress(@Param('address') address: string): Promise<StakingCallback> {
        return {
            success: true,
            code: 'X1000000',
            msg: '请求address信息',
            data: this.stakingService.findAddress(address),
        };
    }

    @Get(':adddress/tickets')
    async findTickets(@Param('address') address: string): Promise<StakingCallback> {
        return {
            success: true,
            code: 'X1000002',
            msg: '请求address tickets信息',
            data: this.stakingService.findTickets(address),

        };
    }
}
