import { Logger } from '@nestjs/common';

export class Base {
    protected logger;
    constructor(name: string) {
        this.logger = new Logger(name);
    }
}
