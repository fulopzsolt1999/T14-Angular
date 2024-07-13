import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css',
})
export class NgifComponent {
  szovegmegjelenit: boolean = true;
  megjelenitesKiBe(): void {
    if (this.szovegmegjelenit) {
      this.szovegmegjelenit = false;
    } else {
      this.szovegmegjelenit = true;
    }
  }
}
