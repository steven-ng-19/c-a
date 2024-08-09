import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/config/prisma/prisma.service';
import { Product } from '@prisma/client';
import { ProductEntity } from 'src/infrastructure/config/entities';
import { ProductRepository } from 'src/domain/repositories/product/product-repository.interface';

@Injectable()
export class DatabaseProductRepository implements ProductRepository {
  constructor(private readonly _prismaService: PrismaService) {}
  async create(product: ProductEntity): Promise<ProductEntity> {
    return await this._prismaService.product.create({ data: product });
  }
  async findAll(): Promise<ProductEntity[]> {
    return await this._prismaService.product.findMany();
  }
  async findOne(id: string): Promise<ProductEntity | null> {
    return await this._prismaService.product.findUnique({
      where: { id },
      include: { posts: true },
    });
  }
  async update(id: string, product: ProductEntity): Promise<ProductEntity> {
    return await this._prismaService.product.update({
      where: { id },
      data: product,
    });
  }
  async delete(id: string): Promise<void> {
    await this._prismaService.product.delete({ where: { id } });
  }

  private _toDatabaseProduct(productEntity: ProductEntity): Product {
    const product: Product = {
      id: productEntity.id,
      name: productEntity.name,
      description: productEntity.description,
      price: productEntity.price,
      quantity: productEntity.quantity,
      createdAt: productEntity.createdAt,
      updatedAt: productEntity.updatedAt,
    };
    return product;
  }

  private _toProductEntity(product: Product): ProductEntity {
    const productEntity: ProductEntity = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
    return productEntity;
  }
}
