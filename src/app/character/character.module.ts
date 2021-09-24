import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './page/character-routing.module';
import { CharacterComponent } from './page/character.component';
import { CharacterService } from './services/character/character.service';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { HttpClientModule } from '@angular/common/http';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { ButtonModule } from '../shared/components/button/button.module';
import { FormSearchModule } from '../shared/components/form-search/form-search.module';
import { ListModule } from '../shared/components/list/list.module';

@NgModule({
  declarations: [CharacterComponent, CardCharacterComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    HttpClientModule,
    ButtonModule,
    FormSearchModule,
    ListModule,
  ],
  providers: [CharacterService],
  exports: [CharacterComponent],
})
export class CharacterModule {}
