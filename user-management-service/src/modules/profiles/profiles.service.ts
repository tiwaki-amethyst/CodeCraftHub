import { Injectable } from '@nestjs/common';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class ProfilesService {
  async createProfile(dto: any): Promise<Profile> {
    return dto as any;
  }

  async findOrCreateProfile(userId: string): Promise<Profile> {
    return { userId, displayName: 'New Learner' } as any;
  }
}
