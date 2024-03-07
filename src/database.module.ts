import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Teamo090111.',
      database: 'chaoheyu',
      entities: [User],
      synchronize: true, // 设置为 true 可以自动创建数据库表结构，生产环境慎用
    }),
    TypeOrmModule.forFeature([User]),
  ],
})
export class DatabaseModule {}
