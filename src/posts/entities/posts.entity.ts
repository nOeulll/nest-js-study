import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsersModel } from '../../users/entities/users.entity';

@Entity()
export class PostsModel {
  @PrimaryGeneratedColumn()
  id: number;

  // 1) UsersModel 과 연동한다. FK 이용해서
  // 2) null이 될 수 없다.
  @ManyToOne(() => UsersModel, (user) => user.posts, {
    nullable: false,
  })
  author: UsersModel;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  likeCount: number;

  @Column()
  commentCount: number;
}
