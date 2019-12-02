import { Controller, Get, Header, Logger, Query } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

import { TransactionsReturnAPIInfo } from './interfaces/transactionsinfo.interfaces';
import { TransactionsService } from './transactions.service';

@ApiUseTags('Transactions相关api')
@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}
  private readonly logger = new Logger(TransactionsController.name);

  @Get()
  @ApiOperation({ title: '获取Transactions列表' })
  async findByPage(@Query() query): Promise<TransactionsReturnAPIInfo> {
    // 日志打印 log/warn/error
    this.logger.log('获取Transactions列表');
    const page = query.pageNum;
    const size = query.pageSize;
    return this.transactionsService.findByPage(query).then(sdata => {
      return {
        pageSize: size,
        pageNum: page,
        success: true,
        code: 'x000002',
        msg: '获取Transactions列表',
        data: sdata,
      };
    });
  }
}
