import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class DtoValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || [String, Number, Boolean, Array, Object].includes(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype as any, value);
    const errors = await validate(object as any);
    if (errors.length > 0) {
      const messages = errors.map((e) => Object.values(e.constraints || {})).flat();
      throw new BadRequestException(`Validation failed: ${messages.join(', ')}`);
    }
    return value;
  }
}
