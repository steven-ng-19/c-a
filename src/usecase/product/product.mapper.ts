import { CreateProductDto, UpdateProductDto } from 'src/domain/dtos/product';

import { Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/infrastructure/config/entities';
import { ProductPresenter } from 'src/domain/presenters';

@Injectable()
export class ProductMapper {
  toProductEntity(product: CreateProductDto | UpdateProductDto): ProductEntity {
    const productEntity = new ProductEntity(product);
    return productEntity;
  }

  toProductPresenter(product: ProductEntity): ProductPresenter {
    const productPresenter = new ProductPresenter(product);
    return productPresenter;
  }
}
