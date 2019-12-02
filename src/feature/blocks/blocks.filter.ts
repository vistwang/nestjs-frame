import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class BlocksFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const resquest = ctx.getRequest();
      const response = ctx.getResponse();
      const status = exception.getStatus();
  }
}
