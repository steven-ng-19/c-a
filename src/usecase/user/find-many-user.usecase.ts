import { DatabaseUserEntityRepository } from 'src/infrastructure/repositories/user/user.repository';
import { Injectable } from '@nestjs/common';
import { UserMapper } from './user.mapper';
import { UserPresenter } from 'src/domain/presenters';

@Injectable()
export class FindManyUserUseCase {
  constructor(
    private readonly _userRepository: DatabaseUserEntityRepository,
    private readonly _userMapper: UserMapper,
  ) {}

  async findAll(): Promise<UserPresenter[]> {
    const users = await this._userRepository.findAll();
    return users.map((user) => this._userMapper.toUserPresenter(user));
  }
}
