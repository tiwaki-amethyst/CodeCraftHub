import { Injectable } from '@nestjs/common';
import { Role } from './schemas/role.schema';

@Injectable()
export class RolesService {
  private roles: Role[] = [
    { name: 'student', permissions: [] } as any,
    { name: 'instructor', permissions: [] } as any,
    { name: 'admin', permissions: [] } as any
  ];

  findAll(): Role[] {
    return this.roles;
  }

  createRole(name: string, permissions: string[] = []): Role {
    const role = { name, permissions } as any;
    this.roles.push(role);
    return role;
  }
}
