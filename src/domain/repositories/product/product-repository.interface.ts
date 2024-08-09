import { ProductModel } from 'src/domain/models/product/product.model';

export interface ProductRepository {
  create(product: ProductModel): Promise<ProductModel>;
  findAll(): Promise<ProductModel[]>;
  findOne(id: string): Promise<ProductModel | null>;
  update(id: string, product: ProductModel): Promise<ProductModel>;
  delete(id: string): Promise<void>;
}
