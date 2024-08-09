import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  password: z.string(),
  role: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export class UserModel extends createZodDto(UserSchema) {}
