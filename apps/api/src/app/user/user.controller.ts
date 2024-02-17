import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, Role, User } from '@prisma/client';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from '../auth/decorators/role.decorator';
import { AuthGuard } from '../auth/guards/auth.guard';
import { RoleGuard } from '../auth/guards/role.guard';

@Controller('user')
@ApiTags('User')
@Roles(Role.ADMIN)
@UseGuards(AuthGuard, RoleGuard)
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('clients')
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async findAllClients(): Promise<User[]> {
    return this.userService.findAllClients();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  async findOneById(@Param('id') id: string) {
    const userFound = await this.userService.findOneById(+id);
    if (!userFound) throw new BadRequestException('User does not exist');
    return userFound;
  }

  @Patch(':id')
  @ApiOkResponse({ type: UserEntity })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    try {
      return this.userService.update(+id, updateUserDto);
    } catch (error) {
      throw new BadRequestException('User does not exist');
    }

  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity })
  async remove(@Param('id') id: string) {
    try {
      return this.userService.remove(+id);
    } catch (error) {
      throw new BadRequestException('User does not exist');
    }

  }
}
