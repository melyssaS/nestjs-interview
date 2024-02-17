import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { DatabaseService } from '../database/database.service';
import { Employee, User } from '@prisma/client';

@Injectable()
export class EmployeeService {

  constructor(private readonly databaseService: DatabaseService) { }

  async create(createEmployeeDto: CreateEmployeeDto, user: User): Promise<Employee> {
    const { id } = user;
    return this.databaseService.employee.create({ data: { userId: id, ...createEmployeeDto } });
  }

  async findAll(user: User): Promise<Employee[]> {
    const { id } = user;
    return this.databaseService.employee.findMany({ where: { userId: id, } });
  }

  async findOne(id: number): Promise<Employee> {
    return this.databaseService.employee.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    return this.databaseService.employee.update({
      where: {
        id,
      },
      data: updateEmployeeDto
    });
  }

  async remove(id: number): Promise<Employee> {
    return this.databaseService.employee.delete({
      where: { id },
    });
  }
}
