import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './page/character-routing.module';
import { CharacterComponent } from './page/character.component';
import { CharacterService } from './services/character/character.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { CardCharacterComponent } from './components/card-character/card-character.component';
import { ButtonModule } from '../shared/components/button/button.module';
import { FormSearchModule } from '../shared/components/form-search/form-search.module';
import { ListModule } from '../shared/components/list/list.module';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [CharacterComponent, CardCharacterComponent, ModalComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    HttpClientModule,
    ButtonModule,
    ListModule,
    MatDialogModule,
  ],
  providers: [CharacterService],
  exports: [CharacterComponent],
})
export class CharacterModule {}
