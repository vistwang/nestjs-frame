import { Controller, Get, Header, Logger, Query } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

import { TransactionsReturnInfo } from './interfaces/transactionsinfo.interfaces';
import { TransactionsService } from './transactions.service';

@ApiUseTags('Transactions相关api')
@Controller('transactions')
export class TransactionsController {
    constructor(private transactionsService: TransactionsService){}
    private readonly logger = new Logger(TransactionsController.name);

    @Get()
    @ApiOperation({title: '获取block列表'})
    @Header('Access-Control-Allow-Origin', '*')
    async findAll(@Query() query): Promise<TransactionsReturnInfo> {
        // 日志打印 log/warn/error
        this.logger.log('获取block列表');
        return this.transactionsService.findAll(query).then((sdata) => {
            return {
                size: 20,
                page: 1,
                success: true,
                code: 'x000002',
                msg: '获取block列表',
                data: sdata,
            };
        });

    }
}
