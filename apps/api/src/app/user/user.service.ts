import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma, Role, User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

  constructor(private readonly databaseService: DatabaseService) { }


  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.databaseService.user.create({ data: createUserDto });
  }

  async findAllClients(): Promise<User[]> {
    return this.databaseService.user.findMany({
      where: {
        role: Role.CLIENT
      }
    });
  }

  async findOneById(id: number): Promise<User> {
    return this.databaseService.user.findUnique({
      where: {
        id,
      }
    })
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.databaseService.user.findUnique({
      where: {
        email,
      }
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto
    });
  }

  async remove(id: number): Promise<User> {
    return this.databaseService.user.delete({
      where: { id },
    });
  }
}
