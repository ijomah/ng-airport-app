import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../services/api-caller.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs';
import { IFlight } from '../common/data.model';
// import { NgxSpinnerService } from 'ngx-spinner/public_api';
import { flightDetailsLocalStorage }  from './../apiData/data';

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

  constructor(private apiServe: ApiCallerService) {
    //this.flightDetails = flightDetailsLocalStorage;
    this.filteredFlight = this.flightDetails;
   }
  
   ngOnInit(): void {
    this.apiServe.getApiData()
      .subscribe(
        (data: IFlight[]) => {
          console.log('data:', data)
          console.log('raw data', Object.entries(data)[1][1]);
          this.flightDetails = Object.entries(data)[1][1]
          this.filteredFlight = this.flightDetails.slice(0);
          //Object.values(data).slice(1);
          // this.flightDetails = [].concat(...Object.values(data).slice(1));
          localStorage.setItem('openSkyApi', JSON.stringify(this.flightDetails));
          console.log("new datas", this.flightDetails);
        },
        (err: any) => console.log(err) 
      );
  
      this._textFilter = '';
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

  // displayAllFlight() {  
  //   this.apiServe.getApiData()
  //     .subscribe(
  //       (data: IFlight[]) => {          
  //         return this.flightDetails = data;
  //       },
  //       (err: any) => console.log(err) 
  //     );
  // }

 

}
