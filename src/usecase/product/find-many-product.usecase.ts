import { DatabaseProductRepository } from 'src/infrastructure/repositories/product/product.repository';
import { Injectable } from '@nestjs/common';
import { ProductMapper } from './product.mapper';
import { ProductPresenter } from 'src/domain/presenters';

@Injectable()
export class FindManyProductUseCase {
  constructor(
    private readonly _productRepository: DatabaseProductRepository,
    private readonly _productMapper: ProductMapper,
  ) {}

  async findAll(): Promise<ProductPresenter[]> {
    const products = await this._productRepository.findAll();
    return products.map((product) =>
      this._productMapper.toProductPresenter(product),
    );
  }
}
