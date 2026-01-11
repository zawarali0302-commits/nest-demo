import { Injectable, OnModuleInit } from "@nestjs/common";
import { InMemoryDatabase } from "./in-memory-database";
import { User } from "src/users/entities/user.entity";

@Injectable()
export class SeedingService implements OnModuleInit {
    constructor(private readonly database: InMemoryDatabase) { }

    onModuleInit() {
        //seed initial data
        this.seed();
    }

    private seed() {
        console.log('Seeding initial data...');

        //create users
        const users: User[] = [
            {
                id: 1,
                name: 'John Doe',
                username: 'johndoe',
                password: 'password123',
                role: 'admin',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                name: 'Jane Doe',
                username: 'janedoe',
                password: 'password123',
                role: 'user',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                name: 'John Smith',
                username: 'johnsmith',
                password: 'password123',
                role: 'user',
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ];

        this.database.seedUsers(users);


        console.log(`seeded ${users.length} users`);
    }



}