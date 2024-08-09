import { DatabasePostRepository } from 'src/infrastructure/repositories/post/post.repository';
import { Injectable } from '@nestjs/common';
import { PostMapper } from './post.mapper';
import { PostPresenter } from 'src/domain/presenters';
import { UpdatePostDto } from 'src/domain/dtos/post';

@Injectable()
export class UpdatePostUseCase {
  constructor(
    private readonly _postRepository: DatabasePostRepository,
    private readonly _postMapper: PostMapper,
  ) {}

  async update(id: string, post: UpdatePostDto): Promise<PostPresenter> {
    const data = this._postMapper.toPostEntity(post);
    const result = await this._postRepository.update(id, data);
    return this._postMapper.toPostPresenter(result);
  }
}
