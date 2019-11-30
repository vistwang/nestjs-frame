import { Model } from 'mongoose';

import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { TransactionsDoc, TransactionsInfo } from './interfaces/transactionsinfo.interfaces';

@Injectable()
export class TransactionsService {
    constructor(@InjectModel('Transactions') private readonly transactionsModel: Model<TransactionsDoc>){}
    private readonly logger = new Logger(TransactionsService.name);
    async findOne(): Promise<TransactionsInfo[]> {
        /* 文档查询
        find()
        findById()
        findOne() */
        // 获取单个
        return await this.transactionsModel.find({}).exec();
    }
    async findByPage(query: any): Promise<TransactionsInfo[]> {
        const {pageNum = 1, pageSize = 10} = query;
        // 获取所有的
        return await this.transactionsModel
        .find({}, { _id: 0 })
        .sort({ timestamp: -1 })
        .skip((pageNum - 1) * pageSize)
        .limit(pageSize)
        .catch(error => {
            this.logger.log(`\n e: ${JSON.stringify(error)}\n`);
            return [];
        });
    }
}
