import { Model } from 'mongoose';

import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { TransactionsDoc, TransactionsInfo } from './interfaces/transactionsinfo.interfaces';

@Injectable()
export class TransactionsService {
    constructor(@InjectModel('Transactions') private readonly transactionsModel: Model<TransactionsDoc>){}
    private readonly logger = new Logger(TransactionsService.name);
    private infoField = {
        _id: 0,
        nonce: 1,
        hash: 1,
        blockHash: 1,
        blockNumber: 1,
        transactionIndex: 1,
    };
    async findOne(): Promise<TransactionsInfo[]> {
        /* 文档查询
        find()
        findById()
        findOne() */
        // 获取单个
        return await this.transactionsModel.find({}, this.infoField).exec();
    }
    async findAll(query: any): Promise<TransactionsInfo[]> {
        const {pageNum = 1, pageSize = 10, goodsName = '', goodsPrice = ''} = query;
        // 获取所有的
        this.logger.log(JSON.stringify(this.transactionsModel));
        return await this.transactionsModel.find().limit(pageSize).exec((data) => {
            this.logger.log(JSON.stringify(data));
        });
    }
}
