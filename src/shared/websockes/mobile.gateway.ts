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

const num = 0;
@WebSocketGateway({ namespace: 'mobile' })
export class WebGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(WebGateway.name);
  @WebSocketServer() server; // 本地特定库的服务器实例

  // 强制执行afterInit（）方法。将特定于库的服务器实例作为参数
  afterInit(socket) {
    this.logger.log(`afterInit ${socket}`);
  }

  // 强制执行handleConnection（）方法。将特定于库的客户端套接字实例作为参数。
  handleConnection(socket, xxx) {
    this.logger.log(`handleConnection ${socket}`);
    this.logger.log(`handleConnection ${xxx}`);
  }

  // 强制执行handleDisconnect（）方法。将特定于库的客户端套接字实例作为参数。
  handleDisconnect(socket) {
    this.logger.log(`handleDisconnect ${socket}`);
  }
}
