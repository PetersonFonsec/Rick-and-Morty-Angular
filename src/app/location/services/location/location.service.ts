import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base/base.service';
import { Location, LocationAll } from './location.model';

@Injectable()
export class LocationService extends BaseService<Location, LocationAll> {
  constructor(private http: HttpClient) {
    super('/location', http);
  }
}
