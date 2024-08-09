import { ProductSchema } from 'src/domain/models/product/product.model';
import { createZodDto } from '@anatine/zod-nestjs';

export const ProductKeys = ProductSchema.keyof().enum;

export const CreateProductValidator = ProductSchema.extend({
  [ProductKeys.name]: ProductSchema.shape.name.trim(),
  [ProductKeys.price]: ProductSchema.shape.price,
  [ProductKeys.quantity]: ProductSchema.shape.quantity,
  [ProductKeys.description]: ProductSchema.shape.description.trim().optional(),
}).pick({
  name: true,
  price: true,
  quantity: true,
  description: true,
});

export class CreateProductDto extends createZodDto(CreateProductValidator) {}
