import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { animateView } from './animate/animation';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animateView]
})
export class AppComponent {
  title = 'Aircraft Info';
  
  constructor(private contexts: ChildrenOutletContexts, public auth: AuthService) {}
  
  routeWithAnimation() {
    console.log(this.auth, window.location.origin);
    console.log('anime value', this.contexts.getContext('primary')?.route?.snapshot?.data?.['jumpIn']);
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['jumpIn'];
  }

}
