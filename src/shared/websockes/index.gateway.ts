import {
    SubscribeMessage,
    WsResponse,
    WebSocketServer,
    MessageBody,
    ConnectedSocket,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket } from 'socket.io';
import { Observable, of } from 'rxjs';
import { Base } from '@class';

// 抽象类是提供其他类继承的基类（父类），不能直接被实例
// 抽象方法只能包含在抽象类中，抽象类中可以包含抽象方法和非抽象方法
// 子类继承抽象类，实现抽象方法
export abstract class IndexGateway extends Base {
    constructor(ClassName: string) {
        super(ClassName);
    }
    @WebSocketServer() server; // 本机库特定的服务器实例

    @SubscribeMessage('events')
    onEvent(@MessageBody() data: string, @ConnectedSocket() client: Socket): Observable<WsResponse<any>> | any {
        // 握手细节
        // {
        //     headers: /* 握手部分的头 */,
        //     time: /* 创建时间 (字符串) */,
        //     address: /* 客户端ip地址 */,
        //     xdomain: /* 连接是否跨域 */,
        //     secure: /* 连接是否安全 */,
        //     issued: /* 创建数据 (unix 时间戳) */,
        //     url: /* 请求url地址 */,
        //     query: /* 询问对象 */
        //   }
        this.logger.log(data);
        this.server.emit('demo', 'hello, 这是来自 indexgateway 的后端的demo数据');
        // client.emit('demo', 'hello, 这是来自 indexgateway 的后端的demo数据');
        return of('hello, 这是来自indexgateway hello事件的数据');
    }
}