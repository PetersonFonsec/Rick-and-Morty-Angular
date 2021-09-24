import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base/base.service';

import { Episode, EpisodeAll } from './episode.model';

@Injectable()
export class EpisodeService extends BaseService<Episode, EpisodeAll> {
  constructor(private http: HttpClient) {
    super('/episode', http);
  }
}
