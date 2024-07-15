import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SzavazatokComponent } from './szavazatok/szavazatok.component';
import { SzavazatHozzaadasComponent } from './szavazat-hozzaadas/szavazat-hozzaadas.component';
import { Hiba404Component } from './hiba404/hiba404.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SzavazatokComponent,
    SzavazatHozzaadasComponent,
    Hiba404Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
