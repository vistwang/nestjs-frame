import {
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Logger, Header } from '@nestjs/common';
import { Socket } from 'socket.io';
import { IndexGateway } from './index.gateway';

const num = 0;
@WebSocketGateway({ path: '/web' })
export class DesktopGateway extends IndexGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor() {
        super(DesktopGateway.name);
    }
  @WebSocketServer() server; // 本地特定库的服务器实例
  @SubscribeMessage('new blocks')
  onBlocks(client: any, payload: any): Observable<WsResponse<any>> | any {
    // client: socket 实例，payload: 从客户端那里得到的数据
    of(1);
  }

  // 强制执行afterInit（）方法。将特定于库的服务器实例作为参数
  afterInit(socket) {
    this.logger.log(`afterInit ${socket}`);
  }

  // 强制执行handleConnection（）方法。将特定于库的客户端套接字实例作为参数。
  handleConnection(socket) {
    this.logger.log(`链接成功 ${socket.id}`);
  }

  // 强制执行handleDisconnect（）方法。将特定于库的客户端套接字实例作为参数。
  handleDisconnect(socket) {
    this.logger.log(`断开链接 ${socket.id}`);
  }
}
