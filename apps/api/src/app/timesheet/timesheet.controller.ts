import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { TimesheetService } from './timesheet.service';
import { CreateTimesheetDto } from './dto/create-timesheet.dto';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RoleGuard } from '../auth/guards/role.guard';
import { Role } from '@prisma/client';
import { Roles } from '../auth/decorators/role.decorator';


@Controller('timesheet')
@ApiTags('Timesheet')
@UseGuards(AuthGuard, RoleGuard)
@ApiBearerAuth()
export class TimesheetController {
  constructor(private readonly timesheetService: TimesheetService) { }

  @Post('create')
  @Roles(Role.CLIENT)
  async create(@Body() createTimesheetDto: CreateTimesheetDto, @Request() req) {
    return this.timesheetService.createWithDetails(createTimesheetDto, req.user);
  }

  @Get('client/all')
  @Roles(Role.CLIENT)
  async findAllByClient(@Request() req) {
    return this.timesheetService.findAllByClient(req.user);
  }

  @Get('admin/all')
  @Roles(Role.ADMIN)
  async findAll() {
    return this.timesheetService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.timesheetService.findOne(+id);
  }


  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.timesheetService.remove(+id);
  }
}


