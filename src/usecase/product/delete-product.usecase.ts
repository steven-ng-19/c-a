import { DatabaseProductRepository } from 'src/infrastructure/repositories/product/product.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteProductUseCase {
  constructor(private readonly _productRepository: DatabaseProductRepository) {}

  async delete(id: string): Promise<void> {
    await this._productRepository.delete(id);
  }
}
