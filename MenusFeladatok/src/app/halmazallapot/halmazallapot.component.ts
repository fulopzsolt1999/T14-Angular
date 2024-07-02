import { Component } from '@angular/core';

@Component({
  selector: 'app-halmazallapot',
  templateUrl: './halmazallapot.component.html',
  styleUrl: './halmazallapot.component.css'
})
export class HalmazallapotComponent {
  //alap mezők, a munkához
  fok: number = 0;
  halmazallapot: string = "folyékony"


  //Kép tulajdonságai(mezők):
  viz: string = "/assets/images/water.jpg";
  vizAlt: string = "víz";
  vizTitle: string = "folyékony";
  alapmeret = 500;

  halmazAllapot() {
    if (this.fok < 0) {
      this.viz = "/assets/images/ice.jpg";
      this.vizAlt = "jég";
      this.vizTitle = "szilárd";
      this.halmazallapot = "szilárd";
    }
    else if (this.fok > 100) {
      this.viz = "/assets/images/steam.jpg";
      this.vizAlt = "gőz";
      this.vizTitle = "légnemű";
      this.halmazallapot = "légnemű";
    }
    else {
      this.viz = "/assets/images/water.jpg";
      this.vizAlt = "víz";
      this.vizTitle = "folyékony";
      this.halmazallapot = "folyékony";
    }
  }
}
