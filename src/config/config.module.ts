import { DynamicModule, Global, Module } from '@nestjs/common';

// import { EnvConfig } from './config.interface';
import { ConfigService } from './config.service';

// 配置模块
@Module({
  providers: [ConfigService],
})
export class ConfigModule {
  // static forRoot<T = EnvConfig>(filePath?: string, validator?: (envConfig: T) => T): DynamicModule {
  //     return {
  //         module: ConfigModule,
  //         providers: [
  //             {
  //                 provide: ConfigService,
  //                 useValue: new ConfigService(filePath || `${process.env.NODE_ENV || 'development'}.env`, validator),
  //             },
  //             {
  //                 provide: ConfigToken,
  //                 useFactory: () => new ConfigService(filePath || `${process.env.NODE_ENV || 'development'}.env`, validator),
  //             },
  //         ],
  //         exports: [
  //             ConfigService,
  //             ConfigToken,
  //         ],
  //     };
  // }
}
