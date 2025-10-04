import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginDto) {
    const { email, password } = dto;
    return this.authService.login(email, password);
  }

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    const { email, password, locale } = dto;
    return this.authService.register(email, password, locale);
  }
}
