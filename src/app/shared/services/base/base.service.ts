import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BaseService<TGetOne, TGetAll> {
  private urlApi = 'https://rickandmortyapi.com/api';

  protected constructor(
    @Inject('path') private readonly path: string,
    private readonly httpClient: HttpClient
  ) {
    this.urlApi += this.path;
  }

  getAll(): Observable<TGetAll> {
    return this.httpClient.get<TGetAll>(this.urlApi);
  }

  getById(id: string): Observable<TGetOne> {
    return this.httpClient.get<TGetOne>(`${this.urlApi}/${id}`);
  }

  getByQuery(params: any): Observable<TGetAll> {
    return this.httpClient.get<TGetAll>(this.urlApi, {
      params,
    });
  }
}
