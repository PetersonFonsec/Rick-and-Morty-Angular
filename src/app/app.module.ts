import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonThemeModule } from './shared/components/button-theme/button-theme.module';
import { MenuModule } from './shared/components/menu/menu.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
    MenuModule,
    ButtonThemeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
