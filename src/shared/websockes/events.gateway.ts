import { SubscribeMessage, WebSocketGateway, WsResponse, WebSocketServer } from '@nestjs/websockets';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Logger } from '@nestjs/common';

let num = 0;
@WebSocketGateway()
export class EventsGateway {
    private readonly logger = new Logger(EventsGateway.name);
    @WebSocketServer() server;
    @SubscribeMessage('events')
    onEvent(client: any, payload: any): Observable<WsResponse<any>> | any {
        // client: socket 实例，payload: 从客户端那里得到的数据
        const { name } = payload;
        client.on('connent', () => {
            num++;
            this.logger.log(`有人链接了...> ${num}`);
        });
        client.on('disconnect', () => {
            num--;
            this.logger.log(`有人离开了...> ${num}`);
        });
        return of(payload);
    }

}