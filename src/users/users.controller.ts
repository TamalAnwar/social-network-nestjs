import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  // Get all the users
  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  // Get single user by ID
  @Get(':id')
  async getOne(@Param() id: string): Promise<User> {
    return this.userService.getOne(id);
  }

  // Create a new user
  @Post('create')
  async create(@Body() user: CreateUserDTO): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':id')
  async update(@Param() id: string, @Body() updates: any): Promise<User> {
    return this.userService.update(id, updates);
  }

  // Delete all the users
  @Delete()
  async deleteAll() {
    this.userService.deleteAll();
    return { info: 'All users deleted' };
  }

  // Delete a single user
  @Delete(':id')
  async delete(@Param() id: string) {
    this.userService.delete(id);
    return { info: 'Deleted the user' };
  }
}
