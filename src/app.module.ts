import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './users/interceptors/logging.interceptor';

const options = {
  // 该对象将传递给底层驱动程序。这里所包含的所有选项优先于连接字符串中传递的选项，参数如下
};

//  db            -数据库设置
//  server        -服务器设置
//  replset       -副本集设置
//  user          -用户名
//  pass          -密码
//  auth          -鉴权选项
//  mongos        -连接多个数据库， 如果要连接多个数据库，只需要设置多个url以,隔开，同时设置mongos为true
//  promiseLibrary

@Module({
  imports: [
    ConfigModule,
    CoreModule,
    FeatureModule,
    SharedModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://47.103.55.126:27017/fusion', options),
  ],
  controllers: [AppController],
  providers: [
      AppService,

      // 全局的拦截器
      {
          provide: APP_INTERCEPTOR,
          useClass: LoggingInterceptor,
      },
],
})
export class AppModule {}
