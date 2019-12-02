import { Controller, Get, Header, Query, Logger } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { SyncinfoService } from './syncinfo.service';
import { SyncinfoAPIInfo } from './interfaces/syncinfoinfo.interfaces';

@Controller('syncinfo')
export class SyncinfoController {
    constructor(private syncinfoService: SyncinfoService ){}
    private readonly logger = new Logger(SyncinfoController.name);

    @Get()
    @ApiOperation({title: 'Syncinfo信息'})
    async findAll(): Promise<SyncinfoAPIInfo> {
        // 日志打印 log/warn/error
        this.logger.log('获取Syncinfo信息');
        return this.syncinfoService.find().then((sdata) => {
            return {
                success: true,
                code: 'x000002',
                msg: '获取Syncinfo信息',
                data: sdata,
            };
        });

    }
}
