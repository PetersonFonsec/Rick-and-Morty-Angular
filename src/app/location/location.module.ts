import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LocationRoutingModule } from './page/location-routing.module';
import { LocationComponent } from './page/location.component';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { CardModule } from '../shared/components/card/card.module';
import { LocationService } from './services/location/location.service';
import { ListModule } from '../shared/components/list/list.module';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonModule } from '../shared/components/button/button.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [LocationComponent, ModalComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    LoadingModule,
    CardModule,
    HttpClientModule,
    ListModule,
    ButtonModule,
    MatDialogModule,
  ],
  providers: [LocationService],
})
export class LocationModule {}
