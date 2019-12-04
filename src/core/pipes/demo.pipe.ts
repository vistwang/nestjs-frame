import { ArgumentMetadata, Injectable, PipeTransform, Logger } from '@nestjs/common';

@Injectable()
export class DemoPipe implements PipeTransform {
    private readonly logger = new Logger(DemoPipe.name);
    transform(value: any, metadata: ArgumentMetadata) {
        this.logger.log('来自全局管道:');
        this.logger.log(metadata);
        return value;
    }
}
