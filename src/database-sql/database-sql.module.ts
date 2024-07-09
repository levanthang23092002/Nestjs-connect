import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'hotels',
      entities: [User],
      synchronize: true,
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
