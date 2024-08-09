import { ZodValidationPipe } from '@anatine/zod-nestjs';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from 'src/domain/dtos/post';
import { PostPresenter } from 'src/domain/presenters';
import {
  CreatePostUseCase,
  DeletePostUsecase,
  FindManyPostUseCase,
  FindOnePostUseCase,
  UpdatePostUseCase,
} from 'src/usecase/post';

@Controller('post')
export class PostController {
  constructor(
    private readonly _createPostUseCase: CreatePostUseCase,
    private readonly _updatePostUseCase: UpdatePostUseCase,
    private readonly _findManyPostUseCase: FindManyPostUseCase,
    private readonly _findOnePostUseCase: FindOnePostUseCase,
    private readonly _deletePostUseCase: DeletePostUsecase,
  ) {}

  @Post()
  @UsePipes(ZodValidationPipe)
  async create(@Body() data: CreatePostDto): Promise<PostPresenter> {
    return await this._createPostUseCase.create(data);
  }

  @Get()
  async findAll(): Promise<PostPresenter[]> {
    return await this._findManyPostUseCase.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostPresenter> {
    return await this._findOnePostUseCase.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ZodValidationPipe)
  async update(
    @Param('id') id: string,
    @Body() data: UpdatePostDto,
  ): Promise<PostPresenter> {
    return await this._updatePostUseCase.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this._deletePostUseCase.delete(id);
  }
}
