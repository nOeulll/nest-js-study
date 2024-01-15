import { PostsModel } from '../entities/posts.entity';
import { PickType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';

// Pick, Omit, Partial -> 타입 반환
// PickType, OmitType, PartialType -> 값 반환

export class CreatePostDto extends PickType(PostsModel, ['title', 'content']) {
  @IsString()
  @IsOptional()
  image?: string;
}
