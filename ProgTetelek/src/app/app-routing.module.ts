import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgtetelekComponent } from './progtetelek/progtetelek.component';
import { HibaComponent } from './hiba/hiba.component';

const routes: Routes = [
  { path: "progtetelek", component: ProgtetelekComponent },
  { path: "prog", component: ProgtetelekComponent },
  { path: "tetelek", component: ProgtetelekComponent },
  { path: "", redirectTo: "/progtetelek", pathMatch: "full" },
  { path: "**", component: HibaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
