export class UserEntity {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;

  createdAt: Date;
  updatedAt: Date;

  constructor(user: any) {
    this.id = user.id ?? undefined;
    this.name = user.name ?? undefined;
    this.email = user.email ?? undefined;
    this.phone = user.phone ?? undefined;
    this.password = user.password ?? undefined;
    this.role = user.role ?? undefined;
    this.createdAt = user.createdAt ?? new Date();
    this.updatedAt = user.updatedAt ?? new Date();
  }
}
