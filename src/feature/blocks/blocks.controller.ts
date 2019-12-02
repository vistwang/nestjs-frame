import { Controller, Get, Header, Logger, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

import { BlocksService } from './blocks.service';
import { BlockReturnInfo } from './interfaces/blockInfo.interfaces';

@Controller('blocks')
@ApiUseTags('blocks相关api')
export class BlocksController {
    constructor(private blocksService: BlocksService){}
    private readonly logger = new Logger(BlocksController.name);

    @Get()
    @ApiOperation({title: '获取block列表'})
    async findAll(@Query() query): Promise<BlockReturnInfo> {
        // 日志打印 log/warn/error
        this.logger.log('获取block列表');
        return this.blocksService.findAll(query).then((sdata) => {
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
