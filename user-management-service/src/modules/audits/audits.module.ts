import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Audit, AuditSchema } from './schemas/audit.schema';
import { AuditsService } from './audits.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Audit.name, schema: AuditSchema }])],
  controllers: [],
  providers: [AuditsService],
  exports: [AuditsService]
})
export class AuditsModule {}
