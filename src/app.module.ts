import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import * as Joi from 'joi';
import { AuthenticationModule } from './authentication/authentication.module';
import { DatabaseModule } from './database';
import PostsModule from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { ExceptionsLoggerFilter } from './utils';
import { CategoriesModule } from './categories/category.module';

@Module({
  imports: [
    PostsModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    AuthenticationModule,
    UsersModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionsLoggerFilter,
    },
  ],
})
export class AppModule {}
