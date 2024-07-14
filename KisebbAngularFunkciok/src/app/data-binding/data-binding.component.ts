import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //Interpoláció
  szoveg: string = "Szeretem a programozást"//osztály mezője

  //Property binding
  kepLink: string = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png";

  kepCel: string = "_blank";
  kepSzelesseg: number = 200;

  kepUtvonal: string = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  kepCimke: string = "Meglepetés";
  kepAlternativSzoveg = "Meglepetés helye"


  //Event binding
  uzenet(): void { //osztály metódusa
    alert("Hello ez itt egy team14 projekt!");
  }
  ittAFonok(): void {
    this.kepLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png";
    this.kepUtvonal = "https://www.w3schools.com/"
  }

  //Kétirányú adatkötés azaz Two Way DataBinding
  // [(ngModel)]
  aOldal: number = 1;
}

