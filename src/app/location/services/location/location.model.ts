import { Pagination } from 'src/app/shared/services/base/base.model';

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationAll {
  info: Pagination;
  results: Location[];
}
