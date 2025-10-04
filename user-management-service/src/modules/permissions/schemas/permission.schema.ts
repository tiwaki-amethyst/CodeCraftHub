import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PermissionDocument = Permission & Document;

@Schema()
export class Permission {
  @Prop({ required: true })
  name: string;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
