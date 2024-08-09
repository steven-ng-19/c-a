import { BadRequestException, Injectable } from '@nestjs/common';

import { DatabasePostRepository } from 'src/infrastructure/repositories/post/post.repository';
import { PostMapper } from './post.mapper';
import { PostPresenter } from 'src/domain/presenters';

@Injectable()
export class FindOnePostUseCase {
  constructor(
    private readonly _postRepository: DatabasePostRepository,
    private readonly _postMapper: PostMapper,
  ) {}

  async findOne(id: string): Promise<PostPresenter> {
    const post = await this._postRepository.findOne(id);
    if (!post) throw new BadRequestException('Post not found');
    return this._postMapper.toPostPresenter(post);
  }
}
