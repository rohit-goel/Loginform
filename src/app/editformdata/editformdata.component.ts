import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-editformdata',
  templateUrl: './editformdata.component.html',
  styleUrls: ['./editformdata.component.css']
})
export class EditformdataComponent implements OnInit {

  loginForm: FormGroup
  password_confirmation() {
    if (this.loginForm.value.password !== this.loginForm.value.confirmpassword) {
      // console.log("wrong");
    }
    else {
      // console.log("correct");
    }
  }
  loginform() {
    localStorage.setItem("totaldata", JSON.stringify(this.loginForm.value));
    this.routes.navigate(["/viewdata"]);
  }

  constructor(private routes: Router) {
    this.loginForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      emailid: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      gender: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      empid: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')])
    });

  }

  ngOnInit() {
  }

}
