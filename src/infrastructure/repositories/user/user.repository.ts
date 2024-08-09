import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma/prisma.service';
import { User } from '@prisma/client';
import { UserEntity } from '../../config/entities';
import { UserEntityRepository } from 'src/domain/repositories/user/user-repository.interface';
import { UserModel } from 'src/domain/models/user/user.model';

@Injectable()
export class DatabaseUserEntityRepository implements UserEntityRepository {
  constructor(private readonly _prismaService: PrismaService) {}
  async create(user: UserEntity): Promise<UserEntity> {
    return await this._prismaService.user.create({ data: user });
  }
  async findAll(): Promise<UserEntity[]> {
    return await this._prismaService.user.findMany();
  }
  async findOne(id: string): Promise<User | null> {
    return await this._prismaService.user.findUnique({
      where: { id },
      include: { posts: true },
    });
  }
  async update(id: string, user: UserEntity): Promise<UserEntity> {
    return await this._prismaService.user.update({
      where: { id },
      data: user,
    });
  }
  async delete(id: string): Promise<void> {
    await this._prismaService.user.delete({ where: { id } });
    return;
  }

  private _toDatabaseUser(userEntity: UserEntity): UserModel {
    const user: User = {
      id: userEntity.id,
      name: userEntity.name,
      email: userEntity.email,
      phone: userEntity.phone,
      role: userEntity.role,
      password: userEntity.password,
      createdAt: userEntity.createdAt,
      updatedAt: userEntity.updatedAt,
    };
    return user;
  }

  private _toUserEntity(user: any): UserEntity {
    const userEntity = new UserEntity(user);
    return userEntity;
  }
}
