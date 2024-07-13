import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { Hiba404Component } from './hiba404/hiba404.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { LoggoloComponent } from './loggolo/loggolo.component';

const routes: Routes = [
  { path: 'kezdolap', component: KezdolapComponent },
  { path: 'hiba404', component: Hiba404Component },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'ngif', component: NgifComponent },
  { path: 'ngfor', component: NgforComponent },
  { path: 'loggolo', component: LoggoloComponent },
  { path: '', redirectTo: '/kezdolap', pathMatch: 'full' },
  { path: '**', component: Hiba404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
