import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../services/api-caller.service';
import { urls } from '../common/links';
import { IFlight } from '../common/data.model';

@Component({
  selector: 'app-flighttime',
  template: `
  <div  class="container" style="max-width: 1240px">
    <div class="row">
      <p>
        <button class="btn btn-primary" routerLink="/dashboard">Back</button>
      </p>
    </div>
    <div>
      <h5 class="card-title">Flights Between</h5>
      <div class="row">
        <!-- <div *ngFor="let flightDetail of flightLists" class="col-md-9 ms-sm-auto col-lg-10 px-md-4"> -->
        <div *ngFor="let flightDetail of flightLists" id="card-border" class="col-md-9 sm col-lg-3 md-4 mb-4">
          <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="..." alt="Card image cap">
              <div class="card-body shadow bg-white rounded">
                  <p class="d-inline-block w-50 mb-3 card-text">Plane Call Sign:</p><span *ngIf="flightDetail.callsign; else showDat" class="border border-warning border-2 p-1 rounded">{{flightDetail.callsign}}</span>
                  <p class="d-inline-block w-50 mb-3 card-text w-5">Departure Date: </p><span class="border border-info border-2 p-1 rounded">{{flightDetail.firstSeen * 1000 | date}}</span>
                  <p class="d-inline-block w-50 mb-3 card-text">Departure Time:  </p><span class="border border-primary border-2 p-1 rounded">{{flightDetail.firstSeen * 1000 | date:'h:mm a z'}}</span>
                  <p class="d-inline-block w-50 mb-3 card-text">Arrival Date:</p><span class="border border-info border-2 p-1 rounded"  >{{flightDetail.lastSeen * 1000 | date}}</span>
                  <p class="d-inline-block w-50">Arrival Time: </p><span class="border border-primary border-2 p-1 rounded">{{flightDetail.firstSeen * 1000 | date:'h:mm a z'}}</span>
                  <p class="card-text"></p>
                  <ng-template #showDat>
                    <span class="border border-warning border-2 p-1 rounded" id="callsign">N/A</span>
                  </ng-template>
              </div>
          </div>
        </div>
      </div>
      <div *ngIf="!flightLists" class="d-block ml-10">
              <div class="d-flex justify-content-center">
                <div class="spinner-border" style="width: 5rem; height: 5rem;" role="status">
                  <span class="sr-only"></span>
                </div>
              </div>
            </div>
    </div>
  </div>
  `,
  styleUrls: ['./flighttime.component.css']
})
export class FlighttimeComponent implements OnInit {

flightLists = JSON.parse(localStorage.getItem('flightTimeInterval'));
dataFromStore = console.log(this.flightLists);
//"https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800"
//addRoute = console.log(`https://opensky-network.org/api/flights/all?begin=${begin}&end=${end}`)
  constructor(private apicaller: ApiCallerService) { }

  ngOnInit(): void {
  //  this.apicaller.getApiData(urls.flightbyTimeIntervalUrl)
  //       .subscribe(
  //         (data: IFlight[]) => {
  //           this.flightLists = data;
  //           localStorage.setItem("flightTimeInterval", JSON.stringify(data));
  //           console.log("flight Time interval", this.flightLists);
  //           // console.log("flight Time interval", data),
  //         },
  //         (err) => console.log(err) 
  //       )
  }
  // getFlightBetweenTime() {
  //     return this.apicaller.getApiData(urls.flightbyTimeIntervalUrl)
  //       .subscribe(
  //         (data) => console.log(data),
  //         (err) => console.log(err) 
  //       )
  //   }
}
