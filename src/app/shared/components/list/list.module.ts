import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, LoadingModule],
  exports: [ListComponent],
})
export class ListModule {}
