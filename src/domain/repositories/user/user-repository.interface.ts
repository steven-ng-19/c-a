import { UserModel } from 'src/domain/models/user/user.model';

export interface UserEntityRepository {
  create(user: UserModel): Promise<UserModel>;
  findAll(): Promise<UserModel[]>;
  findOne(id: string): Promise<UserModel | null>;
  update(id: string, user: UserModel): Promise<UserModel>;
  delete(id: string): Promise<void>;
}
