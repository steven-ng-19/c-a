import { CreateProductDto } from 'src/domain/dtos/product';
import { DatabaseProductRepository } from 'src/infrastructure/repositories/product/product.repository';
import { Injectable } from '@nestjs/common';
import { ProductMapper } from './product.mapper';
import { ProductPresenter } from 'src/domain/presenters';

@Injectable()
export class CreateProductUseCase {
  constructor(
    private readonly _productRepository: DatabaseProductRepository,
    private readonly _productMapper: ProductMapper,
  ) {}

  async create(product: CreateProductDto): Promise<ProductPresenter> {
    const productEntity = this._productMapper.toProductEntity(product);
    const result = await this._productRepository.create(productEntity);
    return this._productMapper.toProductPresenter(result);
  }
}
