import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiCallerService } from '../services/api-caller.service';
import { urls } from '../common/links';
import { IFlight } from '../common/data.model';

@Component({
  selector: 'app-flighttime',
  templateUrl: './flighttime.component.html',
  styleUrls: ['./flighttime.component.css']
})
export class FlighttimeComponent implements OnInit {
flightLists 
@Input() timeDateObj
timeObj;
showForm = true
dateTimeBeg
dateTimeEnd
constructor(private apicaller: ApiCallerService) { }
  
  
  transferVal(dateTimeObject) {
    this.timeObj = dateTimeObject
    console.log('time from app comp from search comp', dateTimeObject);
    this.dateTimeBeg = this.stringDateTimeConvert(dateTimeObject.dateBeg, dateTimeObject.timeBeg);
    this.dateTimeEnd = this.stringDateTimeConvert(dateTimeObject.dateEnd, dateTimeObject.timeEnd);  
    this.getFlightBetweenTime();
  }
  
  stringDateTimeConvert(dateVal, timeVal ) {
    const year = parseInt(dateVal.slice(0, 4));
    const month = parseInt(dateVal.slice(5, 7));
    const day = parseInt(dateVal.slice(8));
    const hour = parseInt(timeVal.slice(0, 2));
    const minute = parseInt(timeVal.slice(3));

    let dateTimeNo = Date.UTC(year, month, day, hour, minute);
    let dateTimeInSeconds =  dateTimeNo / 1000;
    console.log('Unix Epoc in Seconds', dateTimeInSeconds);
    return dateTimeInSeconds;
  }

  ngOnInit(): void {
  }

  getFlightBetweenTime() {
       this.apicaller.getApiData(urls.flightbyTimeIntervalUrl + `?begin=${this.dateTimeBeg}&end=${this.dateTimeEnd}`)
        .subscribe(
          (data: IFlight[]) => {
            this.flightLists = data;
            localStorage.setItem("flightTimeInterval", JSON.stringify(data));
            console.log("flight Time interval", this.flightLists);
          },
          (err) => console.log(err) 
        )
  }
}
