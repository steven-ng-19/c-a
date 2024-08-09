import { Injectable } from '@nestjs/common';
import { PostEntity } from 'src/infrastructure/config/entities';
import { PostRepository } from 'src/domain/repositories/post/post-repository';
import { PrismaService } from 'src/infrastructure/config/prisma/prisma.service';

@Injectable()
export class DatabasePostRepository implements PostRepository {
  constructor(private readonly _prismaService: PrismaService) {}
  async create(post: PostEntity): Promise<PostEntity> {
    return await this._prismaService.post.create({ data: post });
  }
  async findAll(): Promise<PostEntity[]> {
    return await this._prismaService.post.findMany();
  }
  async findOne(id: string): Promise<PostEntity | null> {
    return await this._prismaService.post.findUnique({
      where: { id },
      include: { user: true, product: true },
    });
  }
  async update(id: string, post: PostEntity): Promise<PostEntity> {
    return await this._prismaService.post.update({
      where: { id },
      data: post,
    });
  }
  async delete(id: string): Promise<void> {
    await this._prismaService.post.delete({ where: { id } });
  }
}
