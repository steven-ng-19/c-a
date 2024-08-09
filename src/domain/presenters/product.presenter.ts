import { PostPresenter } from './post.presenter';

export class ProductPresenter {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  posts?: PostPresenter[];

  constructor(product: any) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.quantity = product.quantity;
    this.description = product.description;
    this.createdAt = product.createdAt;
    this.updatedAt = product.updatedAt;

    this.posts = product.posts
      ? product.posts.map((post) => new PostPresenter(post))
      : this.posts;
  }
}
