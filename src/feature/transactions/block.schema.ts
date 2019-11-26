import * as mongoose from 'mongoose';

export const TransactionsSchema = new mongoose.Schema({
    nonce: Number,
    hash: String,
    blockHash: String,
    blockNumber: Number,
    transactionIndex: Number,
    from: String,
    to: String,
    value: String,
    ivalue: Number,
    dvalue: Number,
    gasLimit: Number,
    gasPrice: String,
    gasUsed: Number,
    timestamp: Number,
    input: String,
    status: Number,
    coinType: String,
    type: String,
    log: {
        StartTime: Number,
        TicketID: String,
        TicketOwner: String,
        ExpireTime: Number,
    },

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
