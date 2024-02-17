import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ description: 'User email address', uniqueItems: true })
    email: string;

    @IsNotEmpty()
    @ApiProperty({ description: 'Password for the user account' })
    password: string;

}