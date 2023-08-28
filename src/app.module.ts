import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ImagesService } from './services/images/images.service';
import { BreedsService } from './services/breeds/breeds.service';
import Config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Config],
    }),
    HttpModule,
  ],
  controllers: [AppController],
  providers: [ImagesService, BreedsService],
})
export class AppModule {}
