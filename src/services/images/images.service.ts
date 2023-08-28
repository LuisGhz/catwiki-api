import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import Config from 'src/config';
import { Cat } from 'src/models/cat.model';

@Injectable()
export class ImagesService {
  constructor(
    @Inject(Config.KEY) private _configService: ConfigType<typeof Config>,
    private _httpService: HttpService,
  ) {}

  #apiUrl = `${this._configService.catApiUrl}/images/search?api_key=${this._configService.catApiKey}`;

  getCats() {
    return this._httpService
      .get<Cat[]>(this.#apiUrl + '&limit=10')
      .pipe(map((r) => r.data));
  }

  searchByBreed(breed: string) {
    return this._httpService
      .get<Cat[]>(this.#apiUrl + '&breed_ids=' + breed + '&limit=10')
      .pipe(map((r) => r.data));
  }
}
