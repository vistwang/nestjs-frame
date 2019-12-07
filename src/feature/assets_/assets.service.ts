import { Injectable } from '@nestjs/common';
import demoAssets from './demo';
@Injectable()
export class AssetsService {
    findSAllAssets(query: any) {
        const {
            pageNum = 1,
            pageSize = 20,
        } = query;
        return demoAssets;
    }

    findOne(id: string) {
        return {
            AssetID: '0x82073053f75ecfaae4f6969cecd75638311623ca81a060a2610dc94b88c6365a',
            CanChange: false,
            Decimals: 18,
            Description: '{}',
            Name: 'yapyapo',
            Symbol: 'YAP',
            Total: '10000000000000000000000',
        };
    }

    findDecimal(aid: string) {
        return {
            id: aid,
            symbol: 'YZC',
            decimal: 18,
        };
    }
}
