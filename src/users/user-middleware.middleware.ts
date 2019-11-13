import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

// 中间件 可以全局注册，可以模块里局部注册
@Injectable()
export class UserMiddlewareMiddleware implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction {
        return (req, res, next) => {
          // tslint:disable-next-line:no-console
          console.log('Request...');
          next();
        };
      }
}
