import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

import { AppService } from './app.service';

@Controller()
@ApiUseTags('默认')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({title: '首页'})
  root(): string {
    return this.appService.root();
  }
}
