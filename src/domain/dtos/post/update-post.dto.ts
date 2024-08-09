import { CreatePostValidator } from './create-post.dto';
import { createZodDto } from '@anatine/zod-nestjs';

export const UpdatePostValidator = CreatePostValidator.pick({
  title: true,
  content: true,
}).partial();

export class UpdatePostDto extends createZodDto(UpdatePostValidator) {}
