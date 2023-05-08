import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  
  constructor(public auth: AuthServiceService, private router: Router) { }

    signOut() {
      this.auth.user = undefined;
      this.router.navigate(['/home'])
    }
}
