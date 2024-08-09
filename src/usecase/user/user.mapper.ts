import { CreateUserDto, UpdateUserDto } from 'src/domain/dtos/user';

import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/infrastructure/config/entities';
import { UserPresenter } from 'src/domain/presenters';

@Injectable()
export class UserMapper {
  toUserEntity(data: CreateUserDto | UpdateUserDto): UserEntity {
    const userEntity = new UserEntity(data);
    return userEntity;
  }

  toUserPresenter(user: UserEntity): UserPresenter {
    const userPresenter = new UserPresenter(user);
    return userPresenter;
  }
}
