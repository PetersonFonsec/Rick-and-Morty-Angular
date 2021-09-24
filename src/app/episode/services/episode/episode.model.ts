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
  info: {
    count: number;
    pages: number;
    next: null | string;
    prev: null | string;
  };
  results: Episode[];
}
