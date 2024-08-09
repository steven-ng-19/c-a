import { ProductPresenter } from './product.presenter';
import { UserPresenter } from './user.presenter';

export class PostPresenter {
  id: string;
  productId: string;
  userId: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;

  user?: UserPresenter;
  product?: ProductPresenter;

  constructor(post: any) {
    this.id = post.id;
    this.productId = post.productId;
    this.userId = post.userId;
    this.title = post.title;
    this.content = post.content;
    this.createdAt = post.createdAt;
    this.updatedAt = post.updatedAt;

    this.user = post.user ? new UserPresenter(post.user) : this.user;
    this.product = post.product
      ? new ProductPresenter(post.product)
      : this.product;
  }
}
