import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormSearchComponent],
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  exports: [FormSearchComponent],
})
export class FormSearchModule {}
