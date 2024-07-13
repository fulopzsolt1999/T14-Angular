import { Component } from '@angular/core';

export interface BmiLogEntry {
  height: number;
  weight: number;
  bmiResult: number | null;
}

@Component({
  selector: 'app-vizsgafeladat',
  templateUrl: './vizsgafeladat.component.html',
  styleUrl: './vizsgafeladat.component.css',
})
export class VizsgafeladatComponent {
  height: number = 0;
  weight: number = 0;
  bmiResult: number | null = null;
  log: BmiLogEntry[] = [];

  calculateBMI(): void {
    if (this.height > 0 && this.weight > 0) {
      this.bmiResult = this.weight / (this.height * this.height);
      const logEntry: BmiLogEntry = {
        height: this.height,
        weight: this.weight,
        bmiResult: this.bmiResult,
      };
      this.log.push(logEntry);
    } else {
      this.bmiResult = null;
    }
  }
}
