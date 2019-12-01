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
  async findOne(): Promise<BlockInfo[]> {
    /* 文档查询
            find()
            findById()
            findOne() */
    // 获取单个
    return await this.blockModel.find({}).exec();
  }
  async findAll(query: any): Promise<BlockInfo[]> {
    const {
      pageNum = 1,
      pageSize = 20,
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
