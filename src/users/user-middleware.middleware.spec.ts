import { UserMiddlewareMiddleware } from './user-middleware.middleware';

describe('UserMiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new UserMiddlewareMiddleware()).toBeDefined();
  });
});
