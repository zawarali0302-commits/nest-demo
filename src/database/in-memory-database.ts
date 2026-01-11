import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/entities/user.entity";

@Injectable()
export class InMemoryDatabase {
    private users: User[] = [];

    //users method
    getusers() {
        return this.users;
    }

    getUserById(id: number) {
        return this.users.find(user => user.id === id);
    }

    getUserByUsername(username: string) {
        return this.users.find(user => user.username === username);
    }

    deleteUserById(id: number) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new Error('User not found');
        }
        this.users.splice(index, 1);
    }
    updateUserById(id: number, updateUserDto: Partial<CreateUserDto>){
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1) {
            throw new Error('User not found');
        }
        this.users[index] = { ...this.users[index], ...updateUserDto, updatedAt: new Date() };
        return this.users[index];
    }

    createUser(createUserDto: CreateUserDto) {
        const user = { ...createUserDto, id: Date.now(), createdAt: new Date(), updatedAt: new Date() };
        this.users.push(user);
        return user;
    }

    seedUsers(users: User[]): void {
        this.users = users;
    }
}