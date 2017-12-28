import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../app.globals';
import {Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginParam=new EventEmitter();
  @Output() toggleParam=new EventEmitter();
  constructor(public globals:GlobalsService, private route:Router ) { }
  ngOnInit() {
    localStorage.setItem("userLoggedIn","false");
    console.log("Login Call");
  }
  login(){
    //ajaxcall
    //if valid
    sessionStorage.token="sometoken";
    this.loginParam.emit(true);

    //else send "0"
  }
  switchToForgotPWD(){
   this.toggleParam.emit("forgotPWD");
  }
  switchToRegister(){
    this.toggleParam.emit("register");
  }

}
