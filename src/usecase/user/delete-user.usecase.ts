import { DatabaseUserEntityRepository } from 'src/infrastructure/repositories/user/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly _userRepository: DatabaseUserEntityRepository) {}

  async delete(id: string): Promise<void> {
    await this._userRepository.delete(id);
  }
}
