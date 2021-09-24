import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base/base.service';
import { Character, CharacterList } from './character.model';

@Injectable()
export class CharacterService extends BaseService<Character, CharacterList> {
  constructor(private http: HttpClient) {
    super('/character', http);
  }
}
