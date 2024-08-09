import { BadRequestException, Injectable } from '@nestjs/common';

import { DatabaseProductRepository } from 'src/infrastructure/repositories/product/product.repository';
import { ProductMapper } from './product.mapper';
import { ProductPresenter } from 'src/domain/presenters';

@Injectable()
export class FindOneProductUsecase {
  constructor(
    private readonly _productRepository: DatabaseProductRepository,
    private readonly _productMapper: ProductMapper,
  ) {}

  async findOne(id: string): Promise<ProductPresenter> {
    const product = await this._productRepository.findOne(id);
    if (!product) throw new BadRequestException('Product not found');
    return this._productMapper.toProductPresenter(product);
  }
}
