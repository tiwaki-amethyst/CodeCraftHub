import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum UserStatus { ACTIVE = 'active', INACTIVE = 'inactive' }

@Schema({ timestamps: true })
export class User {
  @Prop({ unique: true })
  username?: string;

  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({ type: [String], default: [] })
  roles: string[];

  @Prop({ default: false })
  emailVerified: boolean;

  @Prop({ type: String, default: UserStatus.ACTIVE })
  status: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
