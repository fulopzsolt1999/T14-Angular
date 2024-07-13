import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  // Interpoláció
  szoveg: string = 'Szeretem a programozást';

  // Property Binding
  kepUtvonal: string = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  kepCel: string = '_blank';
  kepLink: string =
    'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png';
  kepAlternativSzoveg: string = 'Trollface';
  kepCimke: string = 'Meglepetés';
  kepSzelesseg: number = 200;

  // Event Binding
  uzenet(): void {
    alert('Hello ez itt egy team14 project!');
  }

  ittAFonok(): void {
    this.kepLink =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png';
    this.kepUtvonal = 'https://w3schools.com/';
  }

  //Two way data binding
  aOldal: number = 1;
}
