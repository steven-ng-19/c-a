import { CreateUserDto } from 'src/domain/dtos/user';
import { DatabaseUserEntityRepository } from 'src/infrastructure/repositories/user/user.repository';
import { Injectable } from '@nestjs/common';
import { UserMapper } from './user.mapper';
import { UserPresenter } from 'src/domain/presenters';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly _userRepository: DatabaseUserEntityRepository,
    private readonly _userMapper: UserMapper,
  ) {}

  async create(user: CreateUserDto): Promise<UserPresenter> {
    const data = this._userMapper.toUserEntity(user);
    const result = await this._userRepository.create(data);
    return this._userMapper.toUserPresenter(result);
  }

  // async findAll(): Promise<UserPresenter[]> {
  //   const users = await this._userRepository.findAll();
  //   return users.map((user) => this._toUserPresenter(user));
  // }

  // async findOne(id: string): Promise<UserPresenter> {
  //   const user = await this._userRepository.findOne(id);
  //   return this._toUserPresenter(user);
  // }

  // async update(id: string, user: UpdateUserDto): Promise<UserPresenter> {
  //   const data = this._toUserEntity(user);
  //   const result = await this._userRepository.update(id, data);
  //   return this._toUserPresenter(result);
  // }

  // async delete(id: string): Promise<void> {
  //   await this._userRepository.delete(id);
  // }

  // private _toUserEntity(user: any): UserPresenter {
  //   const userEntity = new UserEntity(user);
  //   return userEntity;
  // }

  // private _toUserPresenter(user: User): UserPresenter {
  //   const userPresenter = new UserPresenter(user);
  //   return userPresenter;
  // }
}
