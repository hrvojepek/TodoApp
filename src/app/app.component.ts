import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TodoNg';

  constructor(private authService:AuthService, private router:Router){}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDl_wjUsw6iO1CYNZPZGsr8a_9hFVfegfM",
      authDomain: "todo-a5bcb.firebaseapp.com"
    });
  }
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
