import { CallHandler, ExecutionContext, Injectable, NestInterceptor, BadRequestException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      // // 转化异常
    return next.handle()
    .pipe(
        catchError(error => throwError(new BadRequestException())),
    );
  }
}
