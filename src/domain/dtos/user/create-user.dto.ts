import { UserSchema } from 'src/domain/models/user/user.model';
import { createZodDto } from '@anatine/zod-nestjs';

export const UserKeys = UserSchema.keyof().enum;
export const CreateUserValidator = UserSchema.extend({
  [UserKeys.email]: UserSchema.shape.email.email().trim(),
  [UserKeys.phone]: UserSchema.shape.phone.trim(),
  [UserKeys.password]: UserSchema.shape.password.min(6).trim(),
  [UserKeys.role]: UserSchema.shape.role.trim(),
  [UserKeys.name]: UserSchema.shape.name.min(2).max(50).trim(),
}).pick({
  email: true,
  phone: true,
  password: true,
  role: true,
  name: true,
});

export class CreateUserDto extends createZodDto(CreateUserValidator) {}
