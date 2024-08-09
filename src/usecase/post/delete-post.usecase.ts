import { DatabasePostRepository } from 'src/infrastructure/repositories/post/post.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeletePostUsecase {
  constructor(private readonly _postRepository: DatabasePostRepository) {}

  async delete(id: string): Promise<void> {
    await this._postRepository.delete(id);
  }
}
