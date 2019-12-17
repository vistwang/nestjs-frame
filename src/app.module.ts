import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './feature/users/interceptors/logging.interceptor';

@Module({
  imports: [
    ConfigModule,
    CoreModule,
    FeatureModule,
    SharedModule,
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
