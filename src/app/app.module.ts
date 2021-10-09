import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonThemeModule } from './shared/components/button-theme/button-theme.module';
import { MenuModule } from './shared/components/menu/menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormSearchModule } from './shared/components/form-search/form-search.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
    MenuModule,
    ButtonThemeModule,
    BrowserAnimationsModule,
    FormSearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
