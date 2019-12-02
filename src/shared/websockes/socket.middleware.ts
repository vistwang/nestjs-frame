import { Injectable, NestMiddleware } from '@nestjs/common';
@Injectable()
export class SocketMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        next();
        // throw new Error('Method not implemented.');
    }
}