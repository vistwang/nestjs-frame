import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserMiddlewareMiddleware } from './user-middleware.middleware';
import { UsersController } from './users.controller';
import { UserSchema } from './users.schema';
import { UsersService } from './users.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema}]),
    ],
    controllers: [UsersController],
    providers: [UsersService],
    // exports: [UsersService],
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(UserMiddlewareMiddleware) // 中间件
          .forRoutes('*');
      }
}
