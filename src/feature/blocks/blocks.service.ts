import { Model } from 'mongoose';

import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { BlockInfo, BlockInfoDoc } from './interfaces/blockInfo.interfaces';
import { IUserService } from './interfaces/IBlocksService.interfaces';

@Injectable()
export class BlocksService implements IUserService {
  constructor(
    @InjectModel('Blocks') private readonly blockModel: Model<BlockInfoDoc>,
  ) {}
  private readonly logger = new Logger(BlocksService.name);
  private infoField = {
    _id: 0,
    number: 1,
    timestamp: 1,
    txcount: 1,
    gasUsed: 1,
    gasLimit: 1,
    miner: 1,
  };
  async findOne(): Promise<BlockInfo[]> {
    /* 文档查询
            find()
            findById()
            findOne() */
    // 获取单个
    return await this.blockModel.find({}, this.infoField).exec();
  }
  async findAll(query: any): Promise<BlockInfo[]> {
    const {
      pageNum = 1,
      pageSize = 10,
      goodsName = '',
      goodsPrice = '',
    } = query;
    return await this.blockModel
      .find({}, { _id: 0 })
      .sort({ timestamp: -1 })
      .skip((pageNum - 1) * pageSize)
      .limit(pageSize)
      .catch(e => {
        this.logger.log(`\n e: ${JSON.stringify(e)}\n`);
        return [];
      });
  }

  async create() {
    /* 文档查询
            find()
            findById()
            findOne() */
    // 获取所有的
    return await this.blockModel.find().exec();
  }
}
