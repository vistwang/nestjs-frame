import { configure, getLogger } from 'log4js';

import { Injectable } from '@nestjs/common';

@Injectable()
export class LogsService {
    addLog(){
        configure({
            appenders: {
                log_file: {
                    type: 'dateFile',
                    filename: './logs/http',
                    pattern: 'yyyy-MM-dd.log',
                    alwaysIncludePattern: true,
                },
            },
            categories: { default: { appenders: ['log_file'], level: 'debug' } },
        });
        const logger = getLogger('logs');
        logger.info('Hello to file');
    }
}
