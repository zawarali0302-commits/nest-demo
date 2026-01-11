export class User {
    id: number;
    name: string;
    username: string;
    password: string;
    role: "admin" | "user";
    createdAt: Date;
    updatedAt: Date;
}
