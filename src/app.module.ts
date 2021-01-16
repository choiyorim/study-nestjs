import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import {MoviesModule} from "./movies/movies.module";

//@ -> decorator
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  // controllers: [AppController],
  // providers: [],
})
export class AppModule {}
