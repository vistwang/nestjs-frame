import { Module } from '@nestjs/common';

import { databaseProviders } from './mongodb.providers';
import { MongodbService } from './mongodb.service';
import { MongooseModule } from '@nestjs/mongoose';
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
    imports: [MongooseModule.forRoot('mongodb://localhost/nest', options),
],
  providers: [MongodbService, ...databaseProviders],
  exports: [...databaseProviders],
})
export class MongodbModule {}
