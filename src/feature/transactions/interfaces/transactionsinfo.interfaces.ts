import { Document } from 'mongoose';

export interface TransactionsInfo {
    nonce: number;
    hash: string;
    blockHash: string;
    blockNumber: number;
    transactionIndex: number;
}

export interface TransactionsReturnInfo {
    size: number;
    page: number;
    success: true;
    code: string;
    msg: string;
    data: any;
}

export interface TransactionsDoc extends Document {
    nonce: number;
    hash: string;
    blockHash: string;
    blockNumber: number;
    transactionIndex: number;
    from: string;
    to: string;
    value: string;
    ivalue: number;
    dvalue: number;
    gasLimit: number;
    gasPrice: string;
    gasUsed: number;
    timestamp: number;
    input: string;
    status: number;
    coinType: string;
    type: string;
    log: {
        StartTime: number,
        TicketID: string,
        TicketOwner: string,
        ExpireTime: number,
    };
}
