import * as mongoose from 'mongoose';

export const BlockSchema = new mongoose.Schema({
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
    reward: String,
    selectedTicket: String,
    retreatTickets: Array,
    retreatMiners: Array,
    ticketNumber: Number,

    /* 支持以下八种
    String      字符串
    Number      数字
    Date        日期
    Buffer      二进制
    Boolean     布尔值
    Mixed       混合类型
    ObjectId    对象ID
    Array       数组 */

});
