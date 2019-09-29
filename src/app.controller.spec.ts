import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.root()).toBe('Hello World!');
    });
  });
});

// 装饰器名称	描述
// @Request()	对应Express的req，也可以简写@req
// @Response()	对应Express的res，也可以简写@res
// @Next()	对应Express的next
// @Session()	对应Express的req.session
// @Param(param?: string)	对应Express的req.params
// @Body(param?: string)	对应Express的req.body
// @Query(param?: string)	对应Express的req.query
// @Headers(param?: string)	对应Express的req.headers
// 先说方法装饰器：

// 装饰器名称	描述
// @Post()	对应Express的Post方法
// @Get()	对应Express的Get方法
// @Put()	对应Express的Put方法
// @Delete()	对应Express的Delete方法
// @All()	对应Express的All方法
// @Patch()	对应Express的Patch方法
// @Options()	对应Express的Options方法
// @Head()	对应Express的Head方法
// @Render()	对应Express的res.render方法
// @Header()	对应Express的res.header方法
// @HttpCode()	对应Express的res.status方法，可以配合HttpStatus枚举
