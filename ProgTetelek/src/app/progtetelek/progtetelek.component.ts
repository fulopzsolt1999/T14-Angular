import { Component } from '@angular/core';

@Component({
  selector: 'app-progtetelek',
  templateUrl: './progtetelek.component.html',
  styleUrl: './progtetelek.component.css'
})
export class ProgtetelekComponent {

  manualisErtek!: number;
  tombErtekek: number[] = [];
  ManualisErtekmegadas(): void {
    if (this.manualisErtek != null) {
      this.tombErtekek.push(this.manualisErtek);
    }
    else {
      alert("Az érték megadásda a feltöltésnél kötelező");
    }
  }

  elemSzam!: number;
  alsoHatar!: number;
  felsoHatar!: number;
  AutomatikusErtekmegadas(): void {
    if (this.elemSzam != null && this.alsoHatar != null && this.felsoHatar != null) {
      for (let i: number = 0; i < this.elemSzam; i++) {
        let generaltErtek = Math.round(Math.random() * (this.felsoHatar - this.alsoHatar)) + this.alsoHatar;
        this.tombErtekek.push(generaltErtek);
      }
    }
    else {
      alert("A generálási beállítások kitöltése kötelező!")
    }
  }

  elemekOsszege!: number;
  elemekAtlaga!: number;
  parosElemek!: number[];
  parosElemekSzama!: number;
  paratlanElemekSzama!: number;


  ProgTetelek(): void {
    this.elemekOsszege = this.ElemekOsszege();
    this.elemekAtlaga = this.ElemekOsszege() / this.tombErtekek.length;
    this.parosElemek = this.ParosSzamokListaja();
    this.parosElemekSzama = this.parosElemek.length;
    this.paratlanElemekSzama = this.tombErtekek.length - this.parosElemek.length;
  }

  ElemekOsszege(): number {
    let osszeg: number = 0;
    for (let i = 0; i < this.tombErtekek.length; i++) {
      osszeg += this.tombErtekek[i];
    }
    return osszeg;
  }
  ParosSzamokListaja(): number[] {
    let parosak: number[] = [];
    for (let i = 0; i < this.tombErtekek.length; i++) {
      if (this.tombErtekek[i] % 2 == 0) {
        parosak.push(this.tombErtekek[i]);
      }
    }
    return parosak;
  }


}
