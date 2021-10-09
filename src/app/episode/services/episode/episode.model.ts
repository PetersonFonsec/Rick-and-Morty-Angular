import { Pagination } from 'src/app/shared/services/base/base.model';

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
export interface EpisodeAll {
  info: Pagination;
  results: Episode[];
}
