import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
  Get,
  Param,
  HttpException,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/CreateUsers.dto';
import mongoose from 'mongoose';
import { UpdateUsersDto } from './dto/UpdateUsers.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe)
  createUser(@Body() createUserDto: CreateUsersDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new HttpException('Invalid ID', 400);
    }
    const user = await this.usersService.getUserById(id);
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    return user;
  }

  @Put(':id')
  @UsePipes(new ValidationPipe)
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUsersDto) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new HttpException('Invalid ID', 400);
      }
    const user = await this.usersService.updateUser(id, updateUserDto);
    if (!user) {
        throw new HttpException('User not found', 404);
    }
    return user;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new HttpException('Invalid ID', 400);
    }
    const user = await this.usersService.deleteUser(id);
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    return user;
  }
}

