import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SzavazatokComponent } from './szavazatok/szavazatok.component';

const routes: Routes = [
  { path: 'kezdolap', component: SzavazatokComponent },
  { path: '', redirectTo: '/kezdolap', pathMatch: 'full' },
  { path: '**', redirectTo: '/kezdolap', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
