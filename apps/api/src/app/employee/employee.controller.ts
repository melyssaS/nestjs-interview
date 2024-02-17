import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards, Request, } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeEntity } from './entities/employee.entity';
import { AuthGuard } from '../auth/guards/auth.guard';
import { Roles } from '../auth/decorators/role.decorator';
import { RoleGuard } from '../auth/guards/role.guard';
import { Role } from '@prisma/client';

@Controller('employee')
@ApiTags('Employee')
@Roles(Role.CLIENT)
@UseGuards(AuthGuard, RoleGuard)
@ApiBearerAuth()
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }

  @Post('create')
  @ApiOkResponse({ type: EmployeeEntity })
  async create(@Body() createEmployeeDto: CreateEmployeeDto, @Request() req) {
    return this.employeeService.create(createEmployeeDto, req.user);
  }

  @Get('all')
  @ApiOkResponse({ type: EmployeeEntity, isArray: true })
  async findAll(@Request() req) {
    return this.employeeService.findAll(req.user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const employeeFound = await this.employeeService.findOne(+id);
    if (!employeeFound) throw new BadRequestException('Employee does not exist');
    return employeeFound;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    try {
      return this.employeeService.update(+id, updateEmployeeDto);
    } catch (error) {
      throw new BadRequestException('Employee does not exist');
    }

  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return this.employeeService.remove(+id);
    } catch (error) {
      throw new BadRequestException('Employee does not exist');
    }

  }
}
