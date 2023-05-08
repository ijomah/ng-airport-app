import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFlight } from '../common/data.model';

@Component({
  selector: 'app-search',
  template: `
    <p>
      <input type="text" [placeholder]="childFilterCountry" #filter>
      <!-- <button class="primary" type="button" (click)="valueForFilter(filter.value)">Search</button> -->
    </p>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  @Input() childFilterCountry: string;
  //@Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  valueForFilter(txt: string) {
    //this.childEvent.emit(txt);
  }

}
