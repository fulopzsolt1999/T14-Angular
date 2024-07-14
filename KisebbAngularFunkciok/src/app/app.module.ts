import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { Hiba404Component } from './hiba404/hiba404.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { LoggoloComponent } from './loggolo/loggolo.component';
import { FormsModule } from '@angular/forms';
import { TablazatGeneralasComponent } from './tablazat-generalas/tablazat-generalas.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    KezdolapComponent,
    Hiba404Component,
    NgforComponent,
    NgifComponent,
    LoggoloComponent,
    TablazatGeneralasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
