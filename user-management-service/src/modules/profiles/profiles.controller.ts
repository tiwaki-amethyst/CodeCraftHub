import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createProfile(@Body() data: any) {
    return this.profilesService.createProfile(data);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getProfile(@Req() req: any) {
    return this.profilesService.findOrCreateProfile(req.user?.sub);
  }
}
