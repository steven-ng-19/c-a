import { CreatePostDto } from 'src/domain/dtos/post';
import { DatabasePostRepository } from 'src/infrastructure/repositories/post/post.repository';
import { Injectable } from '@nestjs/common';
import { PostMapper } from './post.mapper';
import { PostPresenter } from 'src/domain/presenters';

@Injectable()
export class CreatePostUseCase {
  constructor(
    private readonly _postRepository: DatabasePostRepository,
    private readonly _postMapper: PostMapper,
  ) {}

  async create(post: CreatePostDto): Promise<PostPresenter> {
    const postEntity = this._postMapper.toPostEntity(post);
    const result = await this._postRepository.create(postEntity);
    return this._postMapper.toPostPresenter(result);
  }
}
