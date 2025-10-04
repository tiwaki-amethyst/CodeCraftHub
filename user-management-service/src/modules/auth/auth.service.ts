import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService
  ) {}

  async login(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new Error('Invalid credentials');
    const valid = await bcrypt.compare(password, (user as any).passwordHash);
    if (!valid) throw new Error('Invalid credentials');
    const payload = { sub: user.id || user._id, email: user.email, roles: user.roles };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken, user: { id: user.id || user._id, email: user.email, roles: user.roles } };
  }

  async register(email: string, password: string, locale?: string): Promise<any> {
    const existing = await this.usersService.findByEmail(email);
    if (existing) throw new Error('User already exists');
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await this.usersService.createUser(email, passwordHash, ['student']);
    const payload = { sub: user.id || user._id, email: user.email, roles: user.roles };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken, user: { id: user.id || user._id, email: user.email, roles: user.roles } };
  }
}
