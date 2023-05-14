import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  userName;
  password;
  mouseOver;
  
  constructor(public auth: AuthService, private router: Router) { }

  loginUser(userDet) {
    this.auth.loginWithPopup();
  this.router.navigate(['/dashboard']);
  }

  cancel(loginFormInfo) {
    console.log("controls", loginFormInfo)
    console.log("Cancel is clicked");
  }
}