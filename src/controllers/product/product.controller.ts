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
import { CreateProductDto, UpdateProductDto } from 'src/domain/dtos/product';
import { ProductPresenter } from 'src/domain/presenters';
import {
  CreateProductUseCase,
  DeleteProductUseCase,
  FindManyProductUseCase,
  FindOneProductUsecase,
  UpdateProductUseCase,
} from 'src/usecase/product';

@Controller('product')
export class ProductController {
  constructor(
    private readonly _createProductUseCase: CreateProductUseCase,
    private readonly _updateProductUseCase: UpdateProductUseCase,
    private readonly _findManyProductUseCase: FindManyProductUseCase,
    private readonly _findOneProductUseCase: FindOneProductUsecase,
    private readonly _deleteProductUseCase: DeleteProductUseCase,
  ) {}

  @Post()
  @UsePipes(ZodValidationPipe)
  async create(@Body() data: CreateProductDto): Promise<ProductPresenter> {
    return await this._createProductUseCase.create(data);
  }

  @Get()
  async findAll(): Promise<ProductPresenter[]> {
    return await this._findManyProductUseCase.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductPresenter> {
    return await this._findOneProductUseCase.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ZodValidationPipe)
  async update(
    @Param('id') id: string,
    @Body() data: UpdateProductDto,
  ): Promise<ProductPresenter> {
    return await this._updateProductUseCase.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this._deleteProductUseCase.delete(id);
  }
}
