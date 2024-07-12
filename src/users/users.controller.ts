import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './schemas/users.schema';

import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Post()
  async createUser(
    @Body()
    user: CreateUsersDto,
  ): Promise<Users> {
    return this.usersService.create(user);
  }

  @Get(':id')
  async getUser(
    @Param('id')
    id: string,
  ): Promise<Users> {
    return this.usersService.findById(id);
  }

  @Put(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    user: UpdateUserDto,
  ): Promise<Users> {
    return this.usersService.updateById(id, user);
  }

  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string,
  ): Promise<Users> {
    return this.usersService.deleteById(id);
  }
}
