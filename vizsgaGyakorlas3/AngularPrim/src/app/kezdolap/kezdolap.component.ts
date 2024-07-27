import { Component } from '@angular/core';

@Component({
  selector: 'app-kezdolap',
  templateUrl: './kezdolap.component.html',
  styleUrl: './kezdolap.component.css',
})
export class KezdolapComponent {
  number: number = 0;
  ResultLog: string[] = [];
  isPrime: boolean = true;
  currentResult: string[] = [];

  checkIfPrime() {
    this.isPrime = true;
    this.currentResult = [];
    if (this.number > 0) {
      for (let i = 2; i < this.number; i++) {
        if (this.number % i == 0) {
          this.isPrime = false;
          break;
        }
      }
      if (this.isPrime) {
        this.ResultLog.push(`A(z) ${this.number} prím`);
      } else {
        this.ResultLog.push(`A(z) ${this.number} NEM prím`);
      }
      this.currentResult.push(this.ResultLog[this.ResultLog.length - 1]);
    }
  }
}
