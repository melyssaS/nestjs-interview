import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TimesheetModule } from './timesheet/timesheet.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    // PrismaModule,
    DatabaseModule,
    UserModule,
    AuthModule,
    TimesheetModule,
    EmployeeModule],
  controllers: [AppController],
  providers: [
    AppService,
    // HelloCommand
  ],
})
export class AppModule { }
