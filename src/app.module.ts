import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

import { AllExceptionsFilter } from './infrastructure/config/filters/all-exceptions.filter';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { Module } from '@nestjs/common';
import { PostController } from './controllers/post/post.controller';
import { PrismaModule } from './infrastructure/config/prisma/prisma.module';
import { ProductController } from './controllers/product/product.controller';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { ResponseTransformInterceptor } from './infrastructure/config/interceptors/response-transform.interceptor';
import { UsecaseModule } from './usecase/usecase.module';
import { UserController } from './controllers/user/user.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
      cache: true,
    }),

    EnvironmentConfigModule,
    LoggerModule,
    ExceptionsModule,
    RepositoriesModule,

    // UseCase
    UsecaseModule,
    PrismaModule,
  ],
  controllers: [UserController, ProductController, PostController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseTransformInterceptor,
    },
  ],
})
export class AppModule {}
