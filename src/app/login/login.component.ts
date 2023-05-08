import { Component } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  userName;
  password;
  mouseOver;
  
  constructor(private Oauth: AuthServiceService, private router: Router) { }

  loginUser(userDet) {
    this.Oauth.login(userDet.userName, userDet.password);
  this.router.navigate(['/dashboard']);
  }

  cancel(loginFormInfo) {
    console.log("controls", loginFormInfo)
    console.log("Cancel is clicked");
  }
}
