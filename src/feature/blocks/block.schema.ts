import * as mongoose from 'mongoose';

export const BlockSchema = new mongoose.Schema(
  {
    _id: String,
    number: Number,
    hash: String,
    parentHash: String,
    ticketOrder: Number,
    miner: String,
    difficulty: Number,
    totalDifficulty: Number,
    size: Number,
    gasLimit: Number,
    gasUsed: Number,
    timestamp: Number,
    blockTime: Number,
    txcount: Number,
    avgGasprice: String,
    reward: Number,
    selectedTicket: String,
    retreatTickets: Array,
    retreatMiners: Array,
    ticketNumber: Number,
  },
  { collection: 'Blocks', versionKey: false },
);
