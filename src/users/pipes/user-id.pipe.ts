import { ArgumentMetadata, Injectable, Logger, PipeTransform } from '@nestjs/common';

@Injectable()
export class UserIdPipe implements PipeTransform {
    private readonly logger = new Logger(UserIdPipe.name);
    async transform(value: any, metadata: ArgumentMetadata) {
        // 在管道中拿到了参数的值和元数据，我们可以写自己的验证逻辑然后在验证失败的时候让他抛出 ApiException：
        // eg:
        // value = parseInt(value)
        // if(isNaN(value) || typeof value !== 'number' || value <= 0) {
        // throw new ApiException('用户ID无效', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);
        // }

        this.logger.log(value);
        this.logger.log(metadata);
        return value;
    }
}