import { BreedDetail } from './breed-detail.model';

export interface Cat {
  breeds: BreedDetail[];
  id: string;
  url: string;
  width: number;
  height: number;
}
