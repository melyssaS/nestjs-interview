-- DropForeignKey
ALTER TABLE "TimesheetDetail" DROP CONSTRAINT "TimesheetDetail_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "TimesheetDetail" DROP CONSTRAINT "TimesheetDetail_timesheetId_fkey";

-- AddForeignKey
ALTER TABLE "TimesheetDetail" ADD CONSTRAINT "TimesheetDetail_timesheetId_fkey" FOREIGN KEY ("timesheetId") REFERENCES "Timesheet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimesheetDetail" ADD CONSTRAINT "TimesheetDetail_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;
