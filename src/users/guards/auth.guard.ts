import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
    private readonly logger = new Logger(AuthGuard.name);

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<string[]>('fanshe', context.getClass()); // 反射名称， 数据附加位置为处理器方法,这里是class，如果是方法这里用context.getHandler()
        this.logger.warn(roles);
        const request = context.switchToHttp().getRequest(); // 获取请求信息
        const hander = context.getHandler(); // 获取处理请求的方法 返回方法
        const Gclass = context.getClass(); // 获取处理该请求的来自哪个类，返回类
        return true;
    }
}
