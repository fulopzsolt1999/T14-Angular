import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KezdolapComponent } from './kezdolap/kezdolap.component';

const routes: Routes = [
  { path: '', component: KezdolapComponent },
  { path: '**', component: KezdolapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
