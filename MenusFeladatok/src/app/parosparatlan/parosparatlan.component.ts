import { Component } from '@angular/core';

@Component({
  selector: 'app-parosparatlan',
  templateUrl: './parosparatlan.component.html',
  styleUrl: './parosparatlan.component.css'
})
export class ParosparatlanComponent {
  vizsgaltSzam!: number;//A mezőnek nem kötelező értéket adni!
  eredmeny: string = "";

  //Metódus létrehozása(függvény)
  SzamVizsgalata() {
    if (this.vizsgaltSzam % 2 == 0) {
      this.eredmeny = "páros";
    }
    else {
      this.eredmeny = "páratlan";
    }
  }
}
