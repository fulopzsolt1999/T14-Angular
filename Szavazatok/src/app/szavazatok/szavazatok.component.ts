import { Component } from '@angular/core';

@Component({
  selector: 'app-szavazatok',
  templateUrl: './szavazatok.component.html',
  styleUrl: './szavazatok.component.css',
})
export class SzavazatokComponent {
  szavazatok: Szavazatok[] = [
    { korzet: 5, szavazat: 19, nev: 'Ablak Antal', part: '-' },
    { korzet: 1, szavazat: 120, nev: ' Alma Dalma', part: 'GYEP' },
    { korzet: 7, szavazat: 162, nev: ' Bab Zsuzsanna', part: 'ZEP' },
    { korzet: 2, szavazat: 59, nev: 'Barack Barna', part: 'GYEP' },
    { korzet: 6, szavazat: 73, nev: 'Birs Helga', part: 'GYEP' },
    { korzet: 1, szavazat: 154, nev: ' Bors Botond', part: 'HEP' },
    { korzet: 5, szavazat: 188, nev: ' Brokkoli Gyula', part: 'ZEP' },
    { korzet: 6, szavazat: 29, nev: 'Ceruza Zsombor', part: '-' },
    { korzet: 4, szavazat: 143, nev: ' Fasirt Ferenc', part: 'HEP' },
    { korzet: 8, szavazat: 157, nev: ' Gomba Gitta', part: 'TISZ' },
    { korzet: 3, szavazat: 13, nev: 'Halmi Helga', part: '-' },
    { korzet: 2, szavazat: 66, nev: 'Hold Ferenc', part: '-' },
    { korzet: 7, szavazat: 34, nev: 'Hurka Herold', part: 'HEP' },
    { korzet: 5, szavazat: 288, nev: ' Joghurt Jakab', part: 'TISZ' },
    { korzet: 4, szavazat: 77, nev: 'Kajszi Kolos', part: 'GYEP' },
    { korzet: 2, szavazat: 187, nev: ' Kapor Karola', part: 'ZEP' },
    { korzet: 6, szavazat: 13, nev: 'Karfiol Ede', part: 'ZEP' },
    { korzet: 6, szavazat: 187, nev: ' Kefir Ilona', part: 'TISZ' },
    { korzet: 7, szavazat: 130, nev: ' Kupa Huba', part: '-' },
    { korzet: 8, szavazat: 98, nev: 'Languszta Auguszta', part: '-' },
    { korzet: 1, szavazat: 34, nev: 'Lila Lilla', part: '-' },
    { korzet: 1, szavazat: 56, nev: 'Medve Rudolf', part: '-' },
    { korzet: 5, szavazat: 67, nev: 'Meggy Csilla', part: 'GYEP' },
    { korzet: 3, szavazat: 45, nev: 'Moly Piroska', part: '-' },
    { korzet: 4, szavazat: 221, nev: ' Monitor Tibor', part: '-' },
    { korzet: 8, szavazat: 288, nev: ' Narancs Edmond', part: 'GYEP' },
    { korzet: 2, szavazat: 220, nev: ' Oldalas Olga', part: 'HEP' },
    { korzet: 3, szavazat: 185, nev: ' Pacal Kata', part: 'HEP' },
    { korzet: 1, szavazat: 199, nev: ' Petrezselyem Petra', part: 'ZEP' },
    { korzet: 8, szavazat: 77, nev: 'Pokol Vidor', part: '-' },
    { korzet: 8, szavazat: 67, nev: 'Ragu Ida', part: 'HEP' },
    { korzet: 3, szavazat: 156, nev: ' Retek Etelka', part: 'ZEP' },
    { korzet: 7, szavazat: 129, nev: ' Sajt Hajnalka', part: 'TISZ' },
    { korzet: 4, szavazat: 38, nev: 'Simon Simon', part: '-' },
    { korzet: 3, szavazat: 87, nev: 'Szilva Szilvia', part: 'GYEP' },
    { korzet: 3, szavazat: 187, nev: ' Tejes Attila', part: 'TISZ' },
    { korzet: 2, szavazat: 65, nev: 'Tejfel Edit', part: 'TISZ' },
    { korzet: 4, szavazat: 39, nev: 'Uborka Ubul', part: 'ZEP' },
    { korzet: 6, szavazat: 288, nev: ' Vadas Marcell', part: 'HEP' },
    { korzet: 5, szavazat: 68, nev: 'Vagdalt Edit', part: 'HEP' },
  ];
  szavazatokObject: Szavazatok[] = this.CreatObjectum(this.szavazatok);
  keresoErtek: string = '';

  korzet!: number;
  szavazat!: number;
  nev!: string;
  part!: string;

  CreatObjectum(szavazatok: Szavazatok[]): Szavazatok[] {
    const szavazatokObj: Szavazatok[] = [];
    for (const item of szavazatok) {
      szavazatokObj.push({
        korzet: +item.korzet,
        szavazat: +item.szavazat,
        nev: item.nev,
        part: item.part,
      });
    }
    return szavazatokObj;
  }

  ujKepviseloHozzaadas() {
    if (!this.korzet || !this.szavazat || !this.nev || !this.part) {
      alert('Nincs minden mező megadva!');
    } else {
      this.szavazatokObject.push({
        korzet: +this.korzet,
        szavazat: +this.szavazat,
        nev: this.nev,
        part: this.part,
      });
    }
  }

  get szurtElemek() {
    if (!this.keresoErtek) {
      return this.szavazatokObject;
    }
    return this.szavazatokObject.filter(
      (szavazatokObject) =>
        szavazatokObject.nev
          .toLowerCase()
          .includes(this.keresoErtek.toLowerCase()) ||
        szavazatokObject.part
          .toLowerCase()
          .includes(this.keresoErtek.toLowerCase())
    );
  }
}

export interface Szavazatok {
  korzet: number;
  szavazat: number;
  nev: string;
  part: string;
}
