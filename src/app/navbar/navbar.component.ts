import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  
  constructor(public auth: AuthService, private router: Router) { }
    signOut() {
      let user = this.auth.user$ 
      user = undefined;
      this.router.navigate(['/home'])
      // this.auth.logout({ logoutParams: { returnTo: document.location.origin } })
      this.auth.logout()
      console.log(this.auth.logout, typeof(document.location.origin));
      
    }

    loginUser(userDet) {
      // this.auth.loginWithPopup();
      this.auth.loginWithRedirect()
    this.router.navigate(['/dashboard']);
    }
}
