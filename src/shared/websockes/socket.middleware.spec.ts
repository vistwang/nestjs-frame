import { SocketMiddleware } from './socket.middleware';

describe('SocketMiddleware', () => {
  it('should be defined', () => {
    expect(new SocketMiddleware()).toBeDefined();
  });
});
