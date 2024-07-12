import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database-sql/database-sql.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UploadModule } from './upload-file/upload-file.module';
import { ConfigModules } from './config/config.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),
    UsersModule,
    UploadModule,
    ConfigModules,
    SocketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSuorce: DataSource) {}
}
