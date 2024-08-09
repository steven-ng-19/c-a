import { BadRequestException, Injectable } from '@nestjs/common';

import { DatabaseUserEntityRepository } from 'src/infrastructure/repositories/user/user.repository';
import { UserMapper } from './user.mapper';
import { UserPresenter } from 'src/domain/presenters';

@Injectable()
export class FindOneUserUseCase {
  constructor(
    private readonly _userRepository: DatabaseUserEntityRepository,
    private readonly _userMapper: UserMapper,
  ) {}

  async findOne(id: string): Promise<UserPresenter> {
    const user = await this._userRepository.findOne(id);
    if (!user) throw new BadRequestException('User not found');
    return this._userMapper.toUserPresenter(user);
  }
}
