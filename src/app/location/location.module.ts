import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';

import { ButtonModule } from '../shared/components/button/button.module';
import { CardModule } from '../shared/components/card/card.module';
import { ListModule } from '../shared/components/list/list.module';

import { LocationRoutingModule } from './page/location-routing.module';
import { LocationComponent } from './page/location.component';
import { LocationService } from './services/location/location.service';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [LocationComponent, ModalComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    CardModule,
    HttpClientModule,
    ListModule,
    ButtonModule,
    MatDialogModule,
  ],
  providers: [LocationService],
})
export class LocationModule {}
