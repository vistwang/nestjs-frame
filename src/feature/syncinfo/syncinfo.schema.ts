import * as mongoose from 'mongoose';

export const syncinfoChema = new mongoose.Schema(
  {
    _id: String,
    number: Number,
    timestamp: Number,
    totalDifficulty: Number,
  },
  { collection: 'SyncInfo', versionKey: false },
);
