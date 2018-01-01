import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../../app.globals';
import {Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginParam=new EventEmitter();
  @Output() toggleParam = new EventEmitter();
  formValidation: FormGroup;
  constructor(public globals: GlobalsService, private route: Router, private fb: FormBuilder ) { }
  ngOnInit() {
    this.formValidation = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]]
    });

    

  }
  save() {
    console.log('Saved: ' + JSON.stringify(this.formValidation.value));
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
