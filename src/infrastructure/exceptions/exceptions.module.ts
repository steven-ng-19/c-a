import { ExceptionsService } from './exceptions.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [ExceptionsService],
})
export class ExceptionsModule {}
