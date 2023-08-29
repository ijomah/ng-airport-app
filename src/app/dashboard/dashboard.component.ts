import { Component, Input, OnInit } from '@angular/core';
import { ApiCallerService } from '../services/api-caller.service';
// import { trigger, state, style, animate, transition } from '@angular/animations';
import { IFlight } from '../common/data.model';
import { urls } from '../common/links';
import { Router } from '@angular/router';
import { animateSize } from '../animate/animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [animateSize]
})
export class DashboardComponent implements OnInit {
  zoom = true
  flightDetails 
  filteredFlight
  show = true
  constructor(private apiServe: ApiCallerService, private route: Router) {
   }
  
  ngOnInit(): void {
    this.apiServe.getApiData(urls.allStateUrl)
    .subscribe(
      (data: IFlight[]) => {
        this.flightDetails = Object.entries(data)[1][1]
        this.filteredFlight = this.flightDetails.slice(0);
      },
      (err: any) => console.log(err) 
    );
  }

  filterData(text: string) {
    if (!text) {
      this.filteredFlight = this.flightDetails.slice(0);
    }
    this.filteredFlight = this.flightDetails.filter(plane => plane[2].toLowerCase().includes(text.toLowerCase()));
    console.log(this.filteredFlight);
  }
    
  resizeImg() {
    console.log('resize me plane');
      this.zoom = false;    
  }
}
