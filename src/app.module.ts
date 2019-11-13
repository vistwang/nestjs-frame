import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [ConfigModule,
        CoreModule,
        FeatureModule,
        SharedModule,
        UsersModule,
        MongooseModule.forRoot('mongodb://localhost/nest'),
    ],
    controllers: [AppController],
    providers: [AppService],
})
// CoreModule 核心模块（注册中间件，过滤器，管道，守卫，拦截器，装饰器等）
// SharedModule 共享模块（注册服务，mongodb，redis等）
// ConfigModule 配置模块（系统配置）
// FeatureModule 特性模块（业务模块，如用户模块，产品模块等
export class AppModule {}
