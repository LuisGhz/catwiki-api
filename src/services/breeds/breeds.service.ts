import { Injectable, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { ConfigType } from '@nestjs/config';
import Config from '../../config';
import { BreedSearcher } from 'src/models/breed-searcher.model';
import { BreedDetail } from 'src/models/breed-detail.model';

@Injectable()
export class BreedsService {
  constructor(
    @Inject(Config.KEY) private _configService: ConfigType<typeof Config>,
    private _httpService: HttpService,
  ) {}

  #apiUrl = `${this._configService.catApiUrl}/breeds/`;

  getAll(): Observable<BreedSearcher[]> {
    return this._httpService.get<BreedDetail[]>(this.#apiUrl).pipe(
      map((r) => r.data),
      map((d) =>
        d.map((b) => ({
          id: b.id,
          name: b.name,
        })),
      ),
    );
  }
}
