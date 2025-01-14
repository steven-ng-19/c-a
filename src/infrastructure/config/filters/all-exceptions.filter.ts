import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { HttpAdapterHost } from '@nestjs/core';

// import { ResponseService } from '@shared/response/response.service';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const response = {
      message: exception?.response?.message ?? exception?.message,
      messageCode: exception?.response?.code ?? 'FAILED',
      error: exception?.response?.error ?? exception?.name,
      errors: exception?.response?.errors ?? null,
    };
    httpAdapter.reply(res, { ...response, path: req?.url ?? null }, status);
  }
}
