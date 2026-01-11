import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InMemoryDatabase } from 'src/database/in-memory-database';




@Injectable()
export class UsersService {
  constructor(private readonly database: InMemoryDatabase) { }

  create(createUserDto: CreateUserDto) {
    return this.database.createUser(createUserDto);
    // const { name, username, password, role } = createUserDto;

    // const newUser: User = {
    //   id: Date.now(),
    //   name,
    //   username,
    //   password,
    //   role,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // }

    // this.database.users.push(newUser);
    // return newUser;
  }

  findAll() {
    return this.database.getusers();
  }

  findOne(id: number) {
    const user = this.database.getUserById(id);

    if (!user) {
      throw new NotFoundException("User with id #" + id + " not found");
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.database.updateUserById(id, updateUserDto);
    // const user = this.database.users.find(user => user.id === id);

    // if (!user) {
    //   throw new Error("User not found");
    // }

    // Object.assign(user, updateUserDto, {
    //   updatedAt: new Date(),
    // });

    // return user;
  }

  remove(id: number) {
    return this.database.deleteUserById(id);
  }
  // const userIndex = this.database.users.findIndex(user => user.id === id);
  // if (userIndex === -1) {
  //   throw new Error("User not found");
  // }
  // this.database.users.splice(userIndex, 1);
  // return "User with id #" + id + " removed successfully";}
}
