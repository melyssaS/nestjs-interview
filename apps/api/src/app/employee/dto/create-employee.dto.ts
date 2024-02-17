import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PayType } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'Name of the Employee' })
    name: string;

    @IsNotEmpty()
    @ApiProperty({ enum: PayType, description: 'Pay type of the Employee' })
    payType: PayType;


    @IsNotEmpty()
    @ApiProperty({ description: 'Pay amount for the Employee' })
    payAmount: number;

}