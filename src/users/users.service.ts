import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];
  // For keeping count of the user
  // And generating new user ids
  userCounter = 1;

  create(user: User): User {
    user.userID = this.userCounter.toString();
    this.userCounter++;
    this.users.push(user);
    return user;
  }

  // Get a single user by thier id
  getOne(id: string): User {
    return this.users.find(u => u.userID === id);
  }

  // Get all the users
  getAll(): User[] {
    return this.users;
  }

  // Update a user account
  update(id: string, updates: User) {
    let index = this.users.findIndex(p => p.userID === id);
    this.users[index] = updates;
    return this.users[index];
  }

  // Delete a users
  delete(id: string) {
    let index = this.users.findIndex(p => p.userID === id);
    this.users.splice(index, 1);
  }

  // Delete all users, just in case!
  deleteAll() {
    this.users = [];
  }
}
