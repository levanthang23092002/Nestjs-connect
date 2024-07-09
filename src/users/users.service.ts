import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/users.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private usersModel: mongoose.Model<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    const result = await this.usersModel.find();
    return result;
  }

  async create(user: Users): Promise<Users> {
    const res = await this.usersModel.create(user);
    return res;
  }

  async findById(id: string): Promise<Users> {
    const book = await this.usersModel.findById(id);

    if (!book) {
      throw new NotFoundException('Book not found.');
    }

    return book;
  }

  async updateById(id: string, book: Users): Promise<Users> {
    return await this.usersModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Users> {
    return await this.usersModel.findByIdAndDelete(id);
  }
}
