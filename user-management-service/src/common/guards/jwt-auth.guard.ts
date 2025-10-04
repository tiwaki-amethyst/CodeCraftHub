import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const auth = req.headers?.authorization;
    if (!auth) return false;
    const [, token] = auth.split(' ');
    if (!token) return false;
    try {
      const payload = this.jwtService.verify(token);
      req.user = payload;
      return true;
    } catch {
      return false;
    }
  }
}
