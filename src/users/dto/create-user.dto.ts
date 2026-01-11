import { IsEnum, IsNotEmpty, Length } from "class-validator";
import { Transform } from "class-transformer";

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}
export class CreateUserDto {
    
    name: string;
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    @Length(6, 20, { message: 'Password must be at least 6 characters long' })
    password: string;
    @Transform(({ value }) => typeof value === 'string' ? value.toLowerCase() : value)
    @IsEnum(UserRole)
    role: "admin" | "user";

}
