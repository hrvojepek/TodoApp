import { Router } from "@angular/router";
import * as firebase from "firebase";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(response => {
        this.router.navigate(["/todo"]);
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
            localStorage.setItem('token', this.token);
          });
      })
      .catch(error => console.log(error));
  }

  logout() {
    firebase.auth().signOut();
    localStorage.removeItem('token');
    this.token = null;
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
      });
    return this.token;
  }

  isAuthenticated() {
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
    
  }
}
