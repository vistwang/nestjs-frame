import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SyncinfoReturnInfoDoc, SyncinfoReturnInfoInfo } from './interfaces/syncinfoinfo.interfaces';

@Injectable()
export class SyncinfoService {
    constructor(@InjectModel('Syncinfo') private readonly SyncinfoModel: Model<SyncinfoReturnInfoDoc>) {

    }
    private readonly logger = new Logger(SyncinfoService.name);

    async find(): Promise<SyncinfoReturnInfoInfo[]> {
        // 获取所有的
        return await this.SyncinfoModel.find().exec().catch(error => {
            this.logger.log(`\n e: ${JSON.stringify(error)}\n`);
            return [];
          });
    }
}
