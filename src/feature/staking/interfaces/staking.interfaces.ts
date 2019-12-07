import { Document } from 'mongoose';

export interface StakingInfo {
    status: boolean;   // ticket status: online/offline
    latestBlock: number;  // timestamp for latest block
    rewards: number;   // total rewards mined by this address(miner),
    possiblity: number;  //  chance of get seclected;
    ticketCount: number;
}

export interface StakingCallback {

}

export interface Ticket {
    block: number;  // the block height that this ticket purchases at;
    startTime: number;  // the timestamp that this ticket puchase at;
    expireTime: number;   // the timestamp that this tikcet will expier;
    amount: number;   // the FSN amoun that puchases the ticket
}

export interface StakingDoc extends Document {
    status: boolean;   // ticket status: online/offline
    latestBlock: number;  // timestamp for latest block
    rewards: number;   // total rewards mined by this address(miner),
    possiblity: number;  //  chance of get seclected;
    ticketCount: number;
}
