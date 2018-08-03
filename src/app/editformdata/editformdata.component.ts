import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-editformdata',
  templateUrl: './editformdata.component.html',
  styleUrls: ['./editformdata.component.css']
})
export class EditformdataComponent implements OnInit {
  loginForm: FormGroup
  data;
  passwordvalidation = "";

  loginform() {
    this.data = this.loginForm.value;
    this.formservice.setMethod(this.data);
    this.routes.navigate(["/viewdata"]);
    this.loginForm.patchValue({ firstname: this.data.firstname });
  }

  pass = "password";

  showpassword() {
    this.pass = "text";
  }
  hidepassword() {
    this.pass = "password";
  }

  constructor(private formservice: FormserviceService, private routes: Router) {
    this.loginForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]),
      emailid: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      gender: new FormControl('', [Validators.required, Validators.pattern('[m/f/o/M/F/O ]*')]),
      confirmpassword: new FormControl('', [Validators.required]),
      empid: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
    });

  }
  ngOnInit() {
    if (this.routes.url == '/editdata') {
      let datashow = this.formservice.getMethod();
      this.loginForm.patchValue({
        firstname: datashow.firstname,
        lastname: datashow.lastname,
        emailid: datashow.emailid,
        contact: datashow.contact,
        password: datashow.password,
        confirmpassword: datashow.confirmpassword,
        gender: datashow.gender,
        empid: datashow.empid
      });
    }
  }
}
