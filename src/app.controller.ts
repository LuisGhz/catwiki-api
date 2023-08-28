import { Controller, Get, Query } from '@nestjs/common';
import { BreedsService } from './services/breeds/breeds.service';
import { ImagesService } from './services/images/images.service';

@Controller('/api')
export class AppController {
  constructor(
    private readonly _imagesService: ImagesService,
    private readonly _breedsService: BreedsService,
  ) {}

  @Get()
  getCats() {
    return this._imagesService.getCats();
  }

  @Get('/breeds')
  getBreeds() {
    return this._breedsService.getAll();
  }

  @Get('/search-by-breed')
  searchByBreed(@Query('breed') breed: string | undefined) {
    if (!breed) throw new Error('Breed not provided');
    return this._imagesService.searchByBreed(breed);
  }
}
