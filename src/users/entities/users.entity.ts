import { Column, Entity, OneToMany } from 'typeorm';
import { RolesEnum } from '../const/roles.enum';
import { PostsModel } from '../../posts/entities/posts.entity';
import { BaseModel } from '../../common/entity/base.entity';

/**
 * id: number
 *
 * nickname: string
 *
 * email: string
 *
 * password: string
 *
 * role: [RolesEnum.USER, RolesEnum.ADMIN]
 *
 *
 */
@Entity()
export class UsersModel extends BaseModel {
  @Column({
    length: 20,
    unique: true,
  })
  // 길이가 20을 넘지 않을 것
  // 유일무이한 값이 될 것
  nickname: string;

  @Column({
    unique: true,
  })
  // 유일무이한 값이 될 것
  email: string;

  @Column()
  password: string;

  @Column({
    enum: Object.values(RolesEnum),
    default: RolesEnum.USER,
  })
  role: RolesEnum;

  @OneToMany(() => PostsModel, (post) => post.author)
  posts: PostsModel[];
}
