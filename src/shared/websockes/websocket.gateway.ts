import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway(80, { namespace: 'events' })
export class WebsocketGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
