import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-viewformdata',
  templateUrl: './viewformdata.component.html',
  styleUrls: ['./viewformdata.component.css']
})

export class ViewformdataComponent implements OnInit {
  show;
  constructor( private formservice:FormserviceService,private routes:Router) {
    this.show=formservice.getMethod();
  }
  ngOnInit() {
  }
  backtoedit() {
    this.routes.navigate(["/editdata"]);
  }
}