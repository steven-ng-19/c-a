import { DatabasePostRepository } from './post/post.repository';
import { DatabaseProductRepository } from './product/product.repository';
import { DatabaseUserEntityRepository } from './user/user.repository';
import { Module } from '@nestjs/common';

@Module({
  controllers: [],
  providers: [
    DatabasePostRepository,
    DatabaseUserEntityRepository,
    DatabaseProductRepository,
  ],
  exports: [
    DatabasePostRepository,
    DatabaseUserEntityRepository,
    DatabaseProductRepository,
  ],
})
export class RepositoriesModule {}
