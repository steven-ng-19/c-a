import { DatabaseUserEntityRepository } from 'src/infrastructure/repositories/user/user.repository';
import { Injectable } from '@nestjs/common';
import { UserMapper } from './user.mapper';
import { UserPresenter } from 'src/domain/presenters';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    private readonly _userMapper: UserMapper,
    private readonly _userRepository: DatabaseUserEntityRepository,
  ) {}

  async update(id: string, user: any): Promise<UserPresenter> {
    const data = this._userMapper.toUserEntity(user);
    const result = await this._userRepository.update(id, data);
    return this._userMapper.toUserPresenter(result);
  }
}
