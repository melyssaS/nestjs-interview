import { Injectable } from '@nestjs/common';
import { CreateTimesheetDto } from './dto/create-timesheet.dto';
import { DatabaseService } from '../database/database.service';
import { Timesheet, TimesheetDetail, User } from '@prisma/client';

@Injectable()
export class TimesheetService {

  constructor(private readonly databaseService: DatabaseService) { }

  async createWithDetails(createTimesheetDto: CreateTimesheetDto, user: User): Promise<Timesheet> {

    const { details, ...timesheetData } = createTimesheetDto;
    const { id } = user

    return this.databaseService.$transaction(async (prisma) => {
      const timesheet: Timesheet = await prisma.timesheet.create({
        data: { userId: id, ...timesheetData, }
      });

      const timesheetDetails: TimesheetDetail[] = await Promise.all(
        details.map((detail) =>
          prisma.timesheetDetail.create({
            data: {
              timesheetId: timesheet.id,
              employeeId: detail.employeeId,
              hoursWorked: detail.hoursWorked,
              grossPay: detail.grossPay,
            },
          })
        )
      );



      return { ...timesheet, details: timesheetDetails };
    });
  }

  findAllByClient(user: User): Promise<Timesheet[]> {
    const { id } = user;
    return this.databaseService.timesheet.findMany({
      where: { userId: id },
      include: { details: true }
    });
  }

  findAll(): Promise<Timesheet[]> {
    return this.databaseService.timesheet.findMany();
  }

  findOne(id: number): Promise<Timesheet> {
    return this.databaseService.timesheet.findUnique({
      where: { id },
      include: { details: true }
    });
  }


  remove(id: number): Promise<Timesheet> {
    return this.databaseService.timesheet.delete({
      where: { id },
      include: { details: true }
    });
  }
}
