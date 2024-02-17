import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {

    @ApiPropertyOptional({ description: 'Company name for client users' })
    companyName: string;

    @ApiProperty({ description: 'User email address' })
    email: string;

}