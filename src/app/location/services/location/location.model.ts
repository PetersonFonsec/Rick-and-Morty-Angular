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
  info: {
    count: number;
    pages: number;
    next: null | string;
    prev: null | string;
  };
  results: Location[];
}
