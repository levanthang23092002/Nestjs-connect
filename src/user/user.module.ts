import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    CacheModule.register({
      ttl: 60,
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
