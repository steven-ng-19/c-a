import { DatabasePostRepository } from 'src/infrastructure/repositories/post/post.repository';
import { Injectable } from '@nestjs/common';
import { PostMapper } from './post.mapper';
import { PostPresenter } from 'src/domain/presenters';

@Injectable()
export class FindManyPostUseCase {
  constructor(
    private readonly _postRepository: DatabasePostRepository,
    private readonly _postMapper: PostMapper,
  ) {}

  async findAll(): Promise<PostPresenter[]> {
    const posts = await this._postRepository.findAll();
    return posts.map((post) => this._postMapper.toPostPresenter(post));
  }
}
