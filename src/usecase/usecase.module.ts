import {
  CreatePostUseCase,
  DeletePostUsecase,
  FindManyPostUseCase,
  FindOnePostUseCase,
  PostMapper,
  UpdatePostUseCase,
} from './post';
import {
  CreateProductUseCase,
  DeleteProductUseCase,
  FindManyProductUseCase,
  FindOneProductUsecase,
  ProductMapper,
  UpdateProductUseCase,
} from './product';
import {
  CreateUserUseCase,
  DeleteUserUseCase,
  FindManyUserUseCase,
  FindOneUserUseCase,
  UpdateUserUseCase,
  UserMapper,
} from './user';

import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/infrastructure/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  providers: [
    // User
    CreateUserUseCase,
    UpdateUserUseCase,
    FindManyUserUseCase,
    FindOneUserUseCase,
    DeleteUserUseCase,
    UserMapper,

    // Product
    CreateProductUseCase,
    UpdateProductUseCase,
    FindManyProductUseCase,
    FindOneProductUsecase,
    DeleteProductUseCase,
    ProductMapper,

    // Post
    CreatePostUseCase,
    UpdatePostUseCase,
    FindManyPostUseCase,
    FindOnePostUseCase,
    DeletePostUsecase,
    PostMapper,
  ],
  exports: [
    // User
    CreateUserUseCase,
    UpdateUserUseCase,
    FindManyUserUseCase,
    FindOneUserUseCase,
    DeleteUserUseCase,

    // Product
    CreateProductUseCase,
    UpdateProductUseCase,
    FindManyProductUseCase,
    FindOneProductUsecase,
    DeleteProductUseCase,

    // Post
    CreatePostUseCase,
    UpdatePostUseCase,
    FindManyPostUseCase,
    FindOnePostUseCase,
    DeletePostUsecase,
  ],
})
export class UsecaseModule {}
