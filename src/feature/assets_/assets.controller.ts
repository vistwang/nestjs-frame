import { Controller, Get, Query, Param } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetCallback } from './interfaces/assets.interfaces';

@Controller('assets_')
export class AssetsController {
    constructor(private assetsService: AssetsService) {}

    @Get()
    async findAllAssets(@Query() query): Promise<AssetCallback> {
        return {
            success: true,
            code: 'X1000220',
            msg: '分页请求Assets信息',
            data: this.assetsService.findSAllAssets(query),
        };
    }
    @Get(':id')
    async findAssets(@Param('id') id: string): Promise<AssetCallback> {
        return {
            success: true,
            code: 'X1000440',
            msg: '请求单个Assets信息',
            data: this.assetsService.findOne(id),
        };
    }
    @Get(':id/decimal')
    async findDecimal(@Param('id') id: string): Promise<AssetCallback> {
        return {
            success: true,
            code: 'X1000440',
            msg: '请求单个decimal信息',
            data: this.assetsService.findDecimal(id),
        };
    }
}
