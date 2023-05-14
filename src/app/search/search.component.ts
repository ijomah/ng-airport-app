import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFlight } from '../common/data.model';
import { Router, Route } from '@angular/router';
import { ApiCallerService } from '../services/api-caller.service';
import { urls } from '../common/links';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  timeBeg
  timeEnd
  dateBeg
  dateEnd

  
  @Input() showHide
  @Input() showHideForm
  

  // @Input() childFilterCountry: string;
  @Output() childEvent = new EventEmitter();
  constructor(private apiServe: ApiCallerService, private route: Router) { }

  ngOnInit(): void {
  }

  valueForFilter(txt) {
    this.childEvent.emit(txt);
  }
  
  timeBetween(time) {
    console.log(time);
    this.childEvent.emit(time);
  }

}
