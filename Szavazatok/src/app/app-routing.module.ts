import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SzavazatokComponent } from './szavazatok/szavazatok.component';
import { SzavazatHozzaadasComponent } from './szavazat-hozzaadas/szavazat-hozzaadas.component';
import { Hiba404Component } from './hiba404/hiba404.component';

const routes: Routes = [
  { path: 'kezdolap', component: SzavazatokComponent },
  { path: 'hozzaadas', component: SzavazatHozzaadasComponent },
  { path: 'hiba', component: Hiba404Component },
  { path: '', redirectTo: '/kezdolap', pathMatch: 'full' },
  { path: '**', redirectTo: '/kezdolap', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
