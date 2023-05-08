import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
user;
// isLoggedIn = false;
  constructor() { }

  login(loggedUser: string, password: string) {
    // if(loggedUser === this.user.userName && password === this.user.password) {
    //   this.isLoggedIn = true;
    //   // Navigate to daashboard
    // } else {
    //   return "User not known. Sign up";
    // }
    this.user = {
      userName: loggedUser,
      //password: "hashedPass",
      firstName: "",
      lastName: ""
    }
  }

  //return true once the user is authenticated
  isAuthenticated() {
    return !!this.user
  }
}
