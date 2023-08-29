import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private router: Router) {}
  // constructor(public auth: AuthService, private router: Router) { }
    signOut() {
      // auth.logout({ logoutParams: { returnTo: document.location.origin } })
      let user = this.auth.user$ 
      // user = undefined;
      this.auth.logout()
      // this.router.navigate([window.location.origin])
      // this.auth.logout({ logoutParams: { returnTo: document.location.origin } })
      
      console.log(this.auth, window.location.origin);
      
    }

    loginUser(userDet) {
      // this.auth.loginWithPopup();
      this.auth.loginWithRedirect()
    this.router.navigate(['/dashboard']);
    console.log(this.auth, window.location.origin);
    }
}
