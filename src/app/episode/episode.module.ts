import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EpisodeRoutingModule } from './page/episode-routing.module';
import { EpisodeComponent } from './page/episode.component';
import { EpisodeService } from './services/episode/episode.service';
import { FormSearchModule } from '../shared/components/form-search/form-search.module';
import { CardModule } from '../shared/components/card/card.module';
import { ListModule } from '../shared/components/list/list.module';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from '../shared/components/button/button.module';

@NgModule({
  declarations: [EpisodeComponent, ModalComponent],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardModule,
    ListModule,
    MatDialogModule,
    ButtonModule,
  ],
  providers: [EpisodeService],
})
export class EpisodeModule {}
