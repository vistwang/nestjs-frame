import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    id: String,

    /* 支持以下八种
    String      字符串
    Number      数字
    Date        日期
    Buffer      二进制
    Boolean     布尔值
    Mixed       混合类型
    ObjectId    对象ID
    Array       数组 */

}, { timestamps: true });

/* 在schema中设置timestamps为true，schema映射的文档document会自动添加createdAt和updatedAt这两个字段，
代表创建时间和更新时间 */

// shift+option+a
/* 每一个文档document都会被mongoose添加一个不重复的_id，
_id的数据类型不是字符串，而是ObjectID类型。如果在查询语句中要使用_id，
则需要使用findById语句，而不能使用find或findOne语句 */
