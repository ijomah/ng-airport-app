import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
     <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button (click)="auth.logout({ logoutParams: { returnTo: document.location.origin } })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>
    <!-- '<button (click)="logout()">Log out</button>' -->
  `,
  styles: [],
})
export class AuthButtonComponent {
  // Inject the authentication service into your component through the constructor
  constructor(@Inject(DOCUMENT) private doc: Document, public auth: AuthService) {}

  logout(): void {
    // Call this to redirect the user to the login page
    // this.auth.logout({ 
    //   logoutParams: { 
    //     returnTo: this.doc.location.origin 
    //   }
    // });
  }
}