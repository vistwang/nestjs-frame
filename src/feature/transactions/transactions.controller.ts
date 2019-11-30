import { Controller, Get, Header, Logger, Query } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

import { TransactionsReturnAPIInfo } from './interfaces/transactionsinfo.interfaces';
import { TransactionsService } from './transactions.service';

@ApiUseTags('Transactions相关api')
@Controller('transactions')
export class TransactionsController {
    constructor(private transactionsService: TransactionsService){}
    private readonly logger = new Logger(TransactionsController.name);

    @Get()
    @ApiOperation({title: '获取Transactions列表'})
    @Header('Access-Control-Allow-Origin', '*')
    async findAll(@Query() query): Promise<TransactionsReturnAPIInfo> {
        // 日志打印 log/warn/error
        this.logger.log('获取Transactions列表');
        const {pageNum = 1, pageSize = 10} = query;
        return this.transactionsService.findByPage(query).then((sdata) => {
            return {
                pageSize: pageNum,
                pageNum: pageSize,
                success: true,
                code: 'x000002',
                msg: '获取Transactions列表',
                data: sdata,
            };
        });

    }
}
