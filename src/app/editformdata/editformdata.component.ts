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
  password_confirmation() {
    if (this.loginForm.value.password !== this.loginForm.value.confirmpassword) {
    }
    else {
      return true;
    }
  }
  loginform() {
    this.data=this.loginForm.value;
    this.formservice.setMethod(this.data);
    this.routes.navigate(["/viewdata"]);
  }

  constructor(private formservice : FormserviceService,private routes: Router) {
    this.loginForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'),Validators.minLength(2)]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'),Validators.minLength(4)]),
      emailid: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20),Validators.pattern('[a-zA-Z]*')]),
      gender: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      empid: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
    });

  }
  ngOnInit() {
  }

}
