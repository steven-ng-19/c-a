import { PostSchemma } from 'src/domain/models/post/post.model';
import { createZodDto } from '@anatine/zod-nestjs';

export const PostKeys = PostSchemma.keyof().enum;

export const CreatePostValidator = PostSchemma.extend({
  [PostKeys.productId]: PostSchemma.shape.productId.uuid().trim(),
  [PostKeys.userId]: PostSchemma.shape.userId.uuid().trim(),
  [PostKeys.title]: PostSchemma.shape.title.trim(),
  [PostKeys.content]: PostSchemma.shape.content.trim(),
}).pick({
  productId: true,
  userId: true,
  title: true,
  content: true,
});

export class CreatePostDto extends createZodDto(CreatePostValidator) {}
