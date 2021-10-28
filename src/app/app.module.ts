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
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

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
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
