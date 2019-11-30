import { Document } from 'mongoose';

export interface SyncinfoReturnInfoInfo {
    _id: string;
    number: number;
    timestamp: number;
    totalDifficulty: number;
}

export interface SyncinfoAPIInfo {
    success: true;
    code: string;
    msg: string;
    data: any;
}

export interface SyncinfoReturnInfoDoc extends Document {
    _id: string;
    number: number;
    timestamp: number;
    totalDifficulty: number;
}
