import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KezdolapComponent } from './kezdolap/kezdolap.component';

const routes: Routes = [
  { path: 'feladat', component: KezdolapComponent },
  { path: '', redirectTo: '/feladat', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
