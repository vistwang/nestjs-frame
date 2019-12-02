import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class BlocksFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
