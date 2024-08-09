import { DatabaseProductRepository } from 'src/infrastructure/repositories/product/product.repository';
import { Injectable } from '@nestjs/common';
import { ProductMapper } from './product.mapper';
import { ProductPresenter } from 'src/domain/presenters';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    private readonly _productMapper: ProductMapper,
    private readonly _productRepository: DatabaseProductRepository,
  ) {}

  async update(id: string, product: any): Promise<ProductPresenter> {
    const data = this._productMapper.toProductEntity(product);
    const result = await this._productRepository.update(id, data);
    return this._productMapper.toProductPresenter(result);
  }
}
