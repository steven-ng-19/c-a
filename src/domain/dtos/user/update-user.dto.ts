import { CreateUserValidator } from './create-user.dto';
import { createZodDto } from '@anatine/zod-nestjs';

export const UpdateUserValidator = CreateUserValidator.partial();

export class UpdateUserDto extends createZodDto(UpdateUserValidator) {}
