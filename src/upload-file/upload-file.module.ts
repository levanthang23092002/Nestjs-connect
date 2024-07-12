import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadController } from './upload-file.controller';
import { UploadService } from './upload.service';
import { upload } from './upload.entity';

@Module({
  imports: [TypeOrmModule.forFeature([upload])],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
