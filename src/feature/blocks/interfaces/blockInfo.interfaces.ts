import { Document } from 'mongoose';

export interface BlockInfo {
    number: number;
    timestamp: number;
    txcount: number;
    gasUsed: number;
    gasLimit: number;
    miner: string;
}

export interface BlockReturnInfo {
    size: number;
    page: number;
    success: true;
    code: string;
    msg: string;
    data: any;
}

export interface BlockInfoDoc extends Document {
    number: number;
    hash: string;
    parentHash: string;
    ticketOrder: number;
    miner: string;
    difficulty: number;
    totalDifficulty: number;
    size: number;
    gasLimit: number;
    gasUsed: number;
    timestamp: number;
    blockTime: number;
    txcount: number;
    avgGasprice: string;
    reward: string;
    selectedTicket: string;
    retreatTickets: any[];
    retreatMiners: any[];
    ticketNumber: number;
}