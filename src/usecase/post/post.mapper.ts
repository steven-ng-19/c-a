import { CreatePostDto, UpdatePostDto } from 'src/domain/dtos/post';

import { Injectable } from '@nestjs/common';
import { PostEntity } from 'src/infrastructure/config/entities';
import { PostPresenter } from 'src/domain/presenters';

@Injectable()
export class PostMapper {
  toPostEntity(post: CreatePostDto | UpdatePostDto): PostEntity {
    const postEntity = new PostEntity(post);
    return postEntity;
  }

  toPostPresenter(post: PostEntity): PostPresenter {
    const postPresenter = new PostPresenter(post);
    return postPresenter;
  }
}
