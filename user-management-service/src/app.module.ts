import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { RolesModule } from './modules/roles/roles.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { AuditsModule } from './modules/audits/audits.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/ums'),
    AuthModule,
    UsersModule,
    ProfilesModule,
    RolesModule,
    PermissionsModule,
    AuditsModule,
  ],
})
export class AppModule {}
