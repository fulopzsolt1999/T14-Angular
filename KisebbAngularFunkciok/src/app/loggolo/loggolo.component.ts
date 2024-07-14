import { Component } from '@angular/core';

@Component({
  selector: 'app-loggolo',
  templateUrl: './loggolo.component.html',
  styleUrl: './loggolo.component.css'
})
export class LoggoloComponent {
  bevasarloLista: string[] = [];
  ujTermek!: string;//Új termék néven változó, ami lehet üres "!"

  termekHozzaad(): void {
    this.bevasarloLista.push(this.ujTermek);
  }
}

