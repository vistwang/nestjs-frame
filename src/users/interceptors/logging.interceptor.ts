import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    private readonly logger = new Logger(LoggingInterceptor.name);

    // 拦截器 执行请求处理器之前被调用
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        this.logger.warn('我是拦截器，我正在被使用');
        return next.handle();
    }
}
