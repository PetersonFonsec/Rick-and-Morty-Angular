import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';

import { CardModule } from '../shared/components/card/card.module';
import { ListModule } from '../shared/components/list/list.module';
import { ButtonModule } from '../shared/components/button/button.module';

import { EpisodeRoutingModule } from './page/episode-routing.module';
import { EpisodeComponent } from './page/episode.component';
import { ModalComponent } from './components/modal/modal.component';
import { EpisodeService } from './services/episode/episode.service';

@NgModule({
  declarations: [EpisodeComponent, ModalComponent],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    HttpClientModule,
    CardModule,
    ListModule,
    MatDialogModule,
    ButtonModule,
  ],
  providers: [EpisodeService],
})
export class EpisodeModule {}
