import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-viewformdata',
  templateUrl: './viewformdata.component.html',
  styleUrls: ['./viewformdata.component.css']
})
export class ViewformdataComponent implements OnInit {
  show;
  constructor(private routes:Router) {
    this.show = JSON.parse(localStorage.getItem("totaldata"));
  }

  ngOnInit() {
  }
  backtoedit() {
    this.routes.navigate(["/editdata"]);
  }
}