import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { upload } from './upload.entity';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(upload)
    private readonly uploadRepository: Repository<upload>,
  ) {}

  async saveFile(file: Express.Multer.File): Promise<upload> {
    const uploads = new upload();
    uploads.filename = file.filename;
    uploads.path = file.path;
    uploads.mimetype = file.mimetype;
    return this.uploadRepository.save(uploads);
  }
}
