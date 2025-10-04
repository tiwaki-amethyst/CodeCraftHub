import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() dto: CreateUserDto) {
    const { email, password, role } = dto;
    const user = await this.usersService.createUser(email, password, role ? [role] : ['student']);
    return { id: user._id, email: user.email };
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@Req() req: any) {
    return req.user;
  }
}
