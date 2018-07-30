import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  loginForm: FormGroup

  constructor() {

    this.loginForm = new FormGroup({

      firstname: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      lastname: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      emailid: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]),
      password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
      gender: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      confirmpassword: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
      empid: new FormControl('', [Validators.required,Validators.min(4),Validators.max(4),Validators.pattern('[0-9]*')])

    });
  }
}
