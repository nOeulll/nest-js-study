import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { ProfileModel } from './profile.entity';
import { PostModel } from './post.entity';

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class UserModel {
  // ID
  // 자동으로 ID를 생성한다.

  @PrimaryGeneratedColumn()
  id: number;

  // email
  @Column()
  email: string;

  // 제목
  // @Column({
  //   // 데이터베이스에서 인지하는 컬럼 타입
  //   // 자동으로 유추됨
  //   type: 'varchar',
  //   // 데이터베이스 칼럼 이름
  //   // 프로퍼티 이름으로 자동 유추됨
  //   name: 'title',
  //   // 값의 길이
  //   // 입력할 수 있는 글자의 길이가 300
  //   length: 300,
  //   // null 이 가능한지
  //   nullable: true,
  //   // true면 처음 저장할 때만 값 지정 가능
  //   // 이후에는 값 변경 불가능
  //   update: true,
  //   // find()를 할 때 기본으로 값을 불러올지
  //   // 기본값이 true
  //   select: false,
  //   // 아무것도 입력 안했을 때 기본으로 입력되는 값
  //   default: 'default value',
  //   // 칼럼중에서 유일무이한 값이 돼야하는지
  //   unique: false,
  // })
  // title: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role: Role;

  // 데이터 생성 일자
  @CreateDateColumn()
  createdAt: Date;

  // 데이터 업데이트 일자
  @UpdateDateColumn()
  updatedAt: Date;

  // 버전
  @VersionColumn()
  version: number;

  @Column()
  @Generated('uuid')
  additionalId: string;

  @OneToOne(() => ProfileModel, (profile) => profile.user, {
    eager: true,
  })
  profile: ProfileModel;

  @OneToMany(() => PostModel, (post) => post.author)
  posts: PostModel[];
}
