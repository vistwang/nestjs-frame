import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { WebGateway } from './web.gateway';

@Module({
  providers: [WebGateway],
})
export class WebsockesModule implements NestModule {
  constructor() {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply();
  }
}
