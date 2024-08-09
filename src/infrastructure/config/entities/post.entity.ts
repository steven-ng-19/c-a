export class PostEntity {
  id: string;
  productId: string;
  userId: string;

  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(post: any) {
    this.id = post.id ?? undefined;
    this.productId = post.productId ?? undefined;
    this.userId = post.userId ?? undefined;
    this.title = post.title ?? undefined;
    this.content = post.content ?? undefined;
    this.createdAt = post.createdAt ?? new Date();
    this.updatedAt = post.updatedAt ?? new Date();
  }
}
