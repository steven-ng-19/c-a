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
import { CreateUserDto, UpdateUserDto } from 'src/domain/dtos/user';
import { UserPresenter } from 'src/domain/presenters';
import {
  CreateUserUseCase,
  DeleteUserUseCase,
  FindManyUserUseCase,
  FindOneUserUseCase,
  UpdateUserUseCase,
} from 'src/usecase/user';

@Controller('user')
export class UserController {
  constructor(
    private readonly _createUserUseCase: CreateUserUseCase,
    private readonly _updateUserUseCase: UpdateUserUseCase,
    private readonly _findManyUserUseCase: FindManyUserUseCase,
    private readonly _findOneUserUseCase: FindOneUserUseCase,
    private readonly _deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Post()
  @UsePipes(ZodValidationPipe)
  async createUser(@Body() data: CreateUserDto): Promise<UserPresenter> {
    return await this._createUserUseCase.create(data);
  }

  @Get()
  async findAll(): Promise<UserPresenter[]> {
    return await this._findManyUserUseCase.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserPresenter> {
    return await this._findOneUserUseCase.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ZodValidationPipe)
  async update(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
  ): Promise<UserPresenter> {
    return await this._updateUserUseCase.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this._deleteUserUseCase.delete(id);
  }
}
