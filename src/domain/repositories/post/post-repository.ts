import { PostModel } from 'src/domain/models/post/post.model';

export interface PostRepository {
  create(post: PostModel): Promise<PostModel>;
  findAll(): Promise<PostModel[]>;
  findOne(id: string): Promise<PostModel | null>;
  update(id: string, post: PostModel): Promise<PostModel>;
  delete(id: string): Promise<void>;
}
