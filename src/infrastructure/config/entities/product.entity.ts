export class ProductEntity {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;

  createdAt: Date;
  updatedAt: Date;

  constructor(product: any) {
    this.id = product.id ?? undefined;
    this.name = product.name ?? undefined;
    this.price = product.price ?? undefined;
    this.quantity = product.quantity ?? undefined;
    this.description = product.description ?? undefined;
    this.createdAt = product.createdAt ?? new Date();
    this.updatedAt = product.updatedAt ?? new Date();
  }
}
