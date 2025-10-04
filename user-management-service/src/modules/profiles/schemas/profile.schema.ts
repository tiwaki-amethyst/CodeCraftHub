import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema({ timestamps: true })
export class Profile {
  @Prop({ required: true })
  userId: string;

  @Prop()
  displayName?: string;

  @Prop()
  avatarUrl?: string;

  @Prop({ type: Map, of: String })
  preferences?: Map<string, string>;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
