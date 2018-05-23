import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  constructor(private router : Router) { }
  ngOnInit() {
  }
  check()
    {
      alert("welcome");
    }
    login() {
      if(this.email == 'shoban@gmail.com' && this.password == 'shoban') {
      this.router.navigate(['home']);
      }else {
      alert("Invalid credentials")
      }
      }
}



