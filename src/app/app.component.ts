import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  loginForm: FormGroup

  password_confirmation() {
    if (this.loginForm.value.password !== this.loginForm.value.confirmpassword) {
      console.log("wrong");
    }
    else {
      console.log("correct");
    }
  }
  loginform() {
    localStorage.setItem("total_data", JSON.stringify(this.loginForm.value));
  }

  constructor() {

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

}
