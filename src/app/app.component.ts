import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { animateView } from './animate/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animateView]
})
export class AppComponent {
  title = 'hamoyeTest';
  constructor(private contexts: ChildrenOutletContexts) {}
  
  routeWithAnimation() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['jumpIn'];
  }
}
