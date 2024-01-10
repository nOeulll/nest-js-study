import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserModel } from './entity/user.entity';
// import { ProfileModel } from './entity/profile.entity';
// import { PostModel } from './entity/post.entity';
// import { TagModel } from './entity/tag.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { UsersModel } from './users/entities/users.entity';
import { PostsModel } from './posts/entities/posts.entity';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersModel, PostsModel]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [UsersModel, PostsModel],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    PostsModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
