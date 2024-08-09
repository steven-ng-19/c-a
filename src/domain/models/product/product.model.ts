import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  description: z.string(),

  createdAt: z.date(),
  updatedAt: z.date(),
});

export class ProductModel extends createZodDto(ProductSchema) {}
