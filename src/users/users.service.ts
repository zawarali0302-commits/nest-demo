import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';



const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: '2yX3M@example.com',
    password: 'password123',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'HtZQ4@example.com',
    password: 'password123',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'John Doe',
    email: '2yX3M@example.com',
    password: 'password123',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];
@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    const newUser = users.push({
      id: users.length + 1,
      name,
      email,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return newUser;
  }

  findAll() {
    return users;
  }

  findOne(id: number) {
    return users.find(user => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = users.find(user => user.id === id);

    if (!user) {
      throw new Error("User not found");
    }

    Object.assign(user, updateUserDto, {
      updatedAt: new Date(),
    });

    return user;
  }

  remove(id: number) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new Error("User not found");
    }
    users.splice(userIndex, 1);
    return "User with id #" + id + " removed successfully";}
}
