import { Injectable } from '@nestjs/common';
import { StakingInfo, Ticket } from './interfaces/staking.interfaces';

@Injectable()
export class StakingService {
    constructor() {}
    private demoAddress: StakingInfo = {
        status: true,
        latestBlock: 1575731882161,
        rewards: 12345,
        possiblity: 678,
        ticketCount: 9999,
    };

    private demoTicket: Ticket[] = [
        {
            block: 9995,
            startTime: 1575731872161,
            expireTime: 1575731882161,
            amount: 8888,
        },
        {
            block: 9996,
            startTime: 1575731883161,
            expireTime: 1575731882161,
            amount: 8889,
        },
        {
            block: 9998,
            startTime: 1575731892161,
            expireTime: 1575731882161,
            amount: 9000,
        },
        {
            block: 9999,
            startTime: 1575731972161,
            expireTime: 1575731882161,
            amount: 9001,
        },
        {
            block: 10000,
            startTime: 1575731992161,
            expireTime: 1575731882161,
            amount: 9002,
        },
    ];

    findAddress(id: string) {
        return this.demoAddress;
    }

    findTickets(id: string) {
        return this.demoTicket;
    }
}
