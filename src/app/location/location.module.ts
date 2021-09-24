import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LocationRoutingModule } from './page/location-routing.module';
import { LocationComponent } from './page/location.component';
import { FormSearchModule } from '../shared/components/form-search/form-search.module';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { CardModule } from '../shared/components/card/card.module';
import { LocationService } from './services/location/location.service';
import { ListModule } from '../shared/components/list/list.module';

@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    FormSearchModule,
    LoadingModule,
    CardModule,
    HttpClientModule,
    ListModule,
  ],
  providers: [LocationService],
})
export class LocationModule {}
