import { Component } from '@angular/core';

@Component({
  selector: 'app-loggolo',
  templateUrl: './loggolo.component.html',
  styleUrl: './loggolo.component.css',
})
export class LoggoloComponent {
  bevasarloLista: string[] = [];
  ujTermek!: string;
  termekHozzaad(): void {
    this.bevasarloLista.push(this.ujTermek);
  }
}
