import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    @ApiPropertyOptional({ description: 'Company name for client users' })
    companyName: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ description: 'User email address', uniqueItems: true })
    email: string;


    @IsNotEmpty()
    @ApiProperty({ description: 'Password for the user account' })
    password: string;

}