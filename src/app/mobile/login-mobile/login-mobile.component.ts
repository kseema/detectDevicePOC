import { Component,Output,OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-mobile',
  templateUrl: './login-mobile.component.html',
  styleUrls: ['./login-mobile.component.css']
})
export class LoginMobileComponent implements OnInit {
  @Output() loginParam=new EventEmitter();
  @Output() toggleParam=new EventEmitter();
  constructor() { }
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
