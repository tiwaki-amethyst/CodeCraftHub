import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  MONGO_URI: Joi.string().uri().required(),
  JWT_SECRET: Joi.string().min(8).required(),
  JWT_EXPIRES_IN: Joi.string().required(),
  PORT: Joi.number().default(3000)
}).unknown(true);
