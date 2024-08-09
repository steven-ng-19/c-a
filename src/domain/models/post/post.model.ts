import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const PostSchemma = z.object({
  id: z.string(),
  productId: z.string(),
  userId: z.string(),

  title: z.string(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export class PostModel extends createZodDto(PostSchemma) {}
