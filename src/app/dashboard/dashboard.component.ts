import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../services/api-caller.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { IFlight } from '../common/data.model';
// import { NgxSpinnerService } from 'ngx-spinner/public_api';
import { flightDetailsLocalStorage }  from './../apiData/data';
import { urls } from '../common/links';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('zoominout', [
      state('in', style({
        height: '100px',
        //transform: 'translate(500px, 200px)'
      })),
      state('out', style({
         height: '300px',
        //transform: 'translate(300px, 500px )'
      })),
      transition('in => out', [

        animate('6s 3s ease-in-out')
      ])
    ]),
  ]
})
export class DashboardComponent implements OnInit {
  zoom = true;
  flightDetails
 // check = console.log(flightDetailsLocalStorage);  
  private _textFilter = "";
  filterCountry = this._textFilter;
  
  filteredFlight: IFlight[] = []

  constructor(private apiServe: ApiCallerService, private route: Router) {
    //this.flightDetails = flightDetailsLocalStorage;
    this.filteredFlight = this.flightDetails;
   }
  
   ngOnInit(): void {
    
    }
 
  filterData(text: string) {
    if (!text) {
      this.filteredFlight = this.flightDetails.slice(0);
    }

    this._textFilter = text.toLowerCase();

      //let flatArr = [].concat(...this.flightDetails);
    this.filteredFlight = this.flightDetails.filter(plane => plane[2].toLowerCase().includes(text.toLowerCase()));
    console.log(this.filteredFlight);
  }

  resizeImg() {
    console.log('resize me plane');
      this.zoom = false;    
  }

  timeBetween(time) {
    console.log(time);
    this.route.navigate(['/flightTime']);
  }

  displayAllFlight() {  
    this.apiServe.getApiData(urls.allStateUrl)
      .subscribe(
        (data: IFlight[]) => {
          this.flightDetails = Object.entries(data)[1][1]
          this.filteredFlight = this.flightDetails.slice(0);
          localStorage.setItem('openSkyApi', JSON.stringify(this.flightDetails));
        },
        (err: any) => console.log(err) 
      );
 }

 

}
