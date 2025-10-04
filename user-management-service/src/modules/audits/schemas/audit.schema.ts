import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuditDocument = Audit & Document;

@Schema({ timestamps: true })
export class Audit {
  @Prop({ required: true })
  action: string;

  @Prop()
  userId?: string;

  @Prop()
  subjectId?: string;

  @Prop({ type: Object })
  payload?: any;
}

export const AuditSchema = SchemaFactory.createForClass(Audit);
