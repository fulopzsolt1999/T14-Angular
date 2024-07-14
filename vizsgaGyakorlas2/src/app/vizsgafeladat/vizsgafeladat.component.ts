import { Component } from '@angular/core';

@Component({
  selector: 'app-vizsgafeladat',
  templateUrl: './vizsgafeladat.component.html',
  styleUrl: './vizsgafeladat.component.css',
})
export class VizsgafeladatComponent {
  EredmenyLog: string[] = [];
  htmlModul!: number;
  bootstrapModul!: number;
  javaScriptModul!: number;
  typeScriptModul!: number;
  angularModul!: number;
  serverModul!: number;
  osszpontszam!: number;

  EredmenyMentes(): void {
    if (this.inputValidation()) {
      this.osszpontszam =
        this.htmlModul +
        this.bootstrapModul +
        this.javaScriptModul +
        this.typeScriptModul +
        this.angularModul +
        this.serverModul;
      this.logEredmeny();
      console.log(this.EredmenyLog);
    } else {
      window.alert('Az összes mező kitöltése kötelező!');
    }
  }

  inputValidation(): boolean {
    if (
      this.htmlModul != null &&
      this.bootstrapModul != null &&
      this.javaScriptModul != null &&
      this.typeScriptModul != null &&
      this.angularModul != null &&
      this.serverModul != null
    ) {
      return true;
    }
    return false;
  }

  logEredmeny(): void {
    if (this.osszpontszam < 50) {
      this.EredmenyLog.push(
        `Sikertelen vizsga, szerzett pont: ${this.osszpontszam}`
      );
    } else if (this.osszpontszam < 60) {
      this.EredmenyLog.push(
        `Sikeres vizsga (2-es), szerzett pont: ${this.osszpontszam}`
      );
    } else if (this.osszpontszam < 70) {
      this.EredmenyLog.push(
        `Sikeres vizsga (3-es), szerzett pont: ${this.osszpontszam}`
      );
    } else if (this.osszpontszam < 80) {
      this.EredmenyLog.push(
        `Sikeres vizsga (4-es), szerzett pont: ${this.osszpontszam}`
      );
    } else {
      this.EredmenyLog.push(
        `Sikeres vizsga (5-es), szerzett pont: ${this.osszpontszam}`
      );
    }
  }
}
