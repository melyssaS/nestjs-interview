import { ApiProperty } from '@nestjs/swagger';

export class UserEntity {
    @ApiProperty({ description: 'Unique identifier of the user' })
    id: number;

    @ApiProperty({ required: false, nullable: true, description: 'Company name for client users' })
    companyName: string | null;

    @ApiProperty({ description: 'User email address' })
    email: string;

    @ApiProperty({ enum: ['CLIENT', 'ADMIN'], description: 'Role of the user' })
    role: string;
}