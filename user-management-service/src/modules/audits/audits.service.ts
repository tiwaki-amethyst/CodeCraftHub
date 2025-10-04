import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Audit, AuditDocument } from './schemas/audit.schema';

@Injectable()
export class AuditsService {
  constructor(@InjectModel(Audit.name) private auditModel: Model<AuditDocument>) {}

  async log(action: string, userId?: string, subjectId?: string, payload?: any) {
    const audit = new this.auditModel({ action, userId, subjectId, payload });
    return audit.save();
  }
}
