import { PostPresenter } from './post.presenter';

export class UserPresenter {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;

  createdAt: Date;
  updatedAt: Date;

  posts?: PostPresenter[];

  constructor(user: any) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.password = user.password;
    this.role = user.role;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;

    this.posts = user.posts
      ? user.posts.map((post) => new PostPresenter(post))
      : this.posts;
  }
}
