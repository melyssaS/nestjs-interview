import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

class TimesheetDetailDto {

    @IsNotEmpty()
    @ApiProperty({ description: 'Foreign key to Employee' })
    employeeId: number;


    @ApiPropertyOptional({ description: 'Hours worked, only for hourly employees', type: 'number', format: 'float', required: false })
    hoursWorked?: number;

    @IsNotEmpty()
    @ApiProperty({ description: 'Gross pay for the timesheet period', type: 'number', format: 'float' })
    grossPay: number;

}


export class CreateTimesheetDto {

    @IsNotEmpty()
    @ApiProperty({ description: 'Check date of the Timesheet', type: 'string', format: 'date-time' })
    checkDate: Date;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ enum: Status, description: 'Status of the Timesheet' })
    status: Status;


    @IsString()
    @ApiProperty({ description: 'Note for the Timesheet', required: false })
    note?: string;


    @ApiProperty({ type: [TimesheetDetailDto], description: 'List of Timesheet Details associated with the Timesheet' })
    details: TimesheetDetailDto[];
}