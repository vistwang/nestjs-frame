import {
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
} from '@nestjs/websockets';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Logger, Header } from '@nestjs/common';

const num = 0;
@WebSocketGateway()
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(EventsGateway.name);
  @WebSocketServer() server; // 本地特定库的服务器实例
  @SubscribeMessage('events')
  onEvent(client: any, payload: any): Observable<WsResponse<any>> | any {
    // client: socket 实例，payload: 从客户端那里得到的数据
    this.logger.log(`获取来自客户端的数据> ${payload}`);
    const { name } = payload;
    // client.on('connent', () => {
    //   num++;
    //   this.logger.log(`有人链接了...> ${num}`);
    // });
    // client.on('disconnect', () => {
    //   num--;
    //   this.logger.log(`有人离开了...> ${num}`);
    // });
    return of('hello, 这是来自后端的数据');
  }
  @SubscribeMessage('connent')
  onConnent(client: any, payload: any): Observable<WsResponse<any>> | any {
    // client: socket 实例，payload: 从客户端那里得到的数据
    this.logger.log(`客户端链接成功> ${payload}`);
  }
  @SubscribeMessage('new blocks')
  onBlocks(client: any, payload: any): Observable<WsResponse<any>> | any {
    // client: socket 实例，payload: 从客户端那里得到的数据
    of(1);
  }

  // 强制执行afterInit（）方法。将特定于库的服务器实例作为参数
  afterInit() {}

  // 强制执行handleConnection（）方法。将特定于库的客户端套接字实例作为参数。
  handleConnection() {}

  // 强制执行handleDisconnect（）方法。将特定于库的客户端套接字实例作为参数。
  handleDisconnect() {}
}
