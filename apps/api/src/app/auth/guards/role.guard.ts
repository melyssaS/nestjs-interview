import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { ROLES_KEY } from '../decorators/role.decorator';
import { Role } from '@prisma/client';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const role: Role = this.reflector.get<Role>(
            ROLES_KEY,
            context.getHandler(),

        );

        if (!role) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const { user } = request;


        return user && user.role && user.role == role;
    }
}