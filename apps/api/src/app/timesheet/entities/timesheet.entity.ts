import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Status } from '@prisma/client';

class TimesheetDetailEntity {
    @ApiProperty({ description: 'Unique identifier of the Timesheet Detail' })
    id: number;

    @ApiProperty({ description: 'Foreign key to Timesheet' })
    timesheetId: number;

    @ApiProperty({ description: 'Foreign key to Employee' })
    employeeId: number;

    @ApiPropertyOptional({ description: 'Hours worked, only for hourly employees', type: 'number', format: 'float', required: false })
    hoursWorked?: number;

    @ApiProperty({ description: 'Gross pay for the timesheet period', type: 'number', format: 'float' })
    grossPay: number;
}

export class TimesheetEntity {
    @ApiProperty({ description: 'Unique identifier of the Timesheet' })
    id: number;

    @ApiProperty({ description: 'Foreign key to User' })
    userId: number;

    @ApiProperty({ description: 'Check date of the Timesheet', type: 'string', format: 'date-time' })
    checkDate: Date;

    @ApiProperty({ enum: Status, description: 'Status of the Timesheet' })
    status: Status;

    @ApiProperty({ description: 'Note for the Timesheet', required: false })
    note?: string;

    @ApiProperty({ type: [TimesheetDetailEntity], description: 'List of Timesheet Details associated with the Timesheet' })
    details: TimesheetDetailEntity[];
}