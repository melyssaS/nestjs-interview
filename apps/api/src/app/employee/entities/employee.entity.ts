import { ApiProperty } from "@nestjs/swagger";

export class EmployeeEntity {
    @ApiProperty({ description: 'Unique identifier of the Employee' })
    id: number;

    @ApiProperty({ description: 'Foreign key to User' })
    userId: number;

    @ApiProperty({ description: 'Name of the Employee' })
    name: string;

    @ApiProperty({ enum: ['HOURLY', 'SALARY'], description: 'Pay type of the Employee' })
    payType: PayType;

    @ApiProperty({ description: 'Pay amount for the Employee' })
    payAmount: number;
}
